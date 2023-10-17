/*
  Warnings:

  - You are about to drop the column `coordenadas` on the `Cafe` table. All the data in the column will be lost.
  - Added the required column `localizacao` to the `Cafe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cafe" DROP COLUMN "coordenadas",
ADD COLUMN     "localizacao" JSONB NOT NULL;
