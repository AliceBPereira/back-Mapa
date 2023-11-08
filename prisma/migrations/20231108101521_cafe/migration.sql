/*
  Warnings:

  - Made the column `quantidade_colhida` on table `Cafe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cafe" ALTER COLUMN "quantidade_colhida" SET NOT NULL;
