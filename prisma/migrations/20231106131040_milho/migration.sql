/*
  Warnings:

  - Added the required column `status` to the `Milho` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusMilho" AS ENUM ('PLANTADO', 'COLHIDO');

-- AlterTable
ALTER TABLE "Milho" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "StatusMilho" NOT NULL;
