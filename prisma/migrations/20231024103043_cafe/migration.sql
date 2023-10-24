/*
  Warnings:

  - Added the required column `status` to the `Cafe` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `localizacao` on the `Predio` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StatusCafe" AS ENUM ('PLANTADO', 'COLHIDO');

-- AlterTable
ALTER TABLE "Cafe" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "StatusCafe" NOT NULL;

-- AlterTable
ALTER TABLE "Predio" DROP COLUMN "localizacao",
ADD COLUMN     "localizacao" JSONB NOT NULL;
