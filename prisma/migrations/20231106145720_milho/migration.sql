/*
  Warnings:

  - Added the required column `prox_colheita` to the `Milho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ult_colheita` to the `Milho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Milho" ADD COLUMN     "prox_colheita" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ult_colheita" TIMESTAMP(3) NOT NULL;
