/*
  Warnings:

  - Added the required column `area_ha` to the `CaprinoOvino` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CaprinoOvino" ADD COLUMN     "area_ha" DECIMAL(65,30) NOT NULL;
