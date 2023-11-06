/*
  Warnings:

  - Made the column `status` on table `Milho` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Milho" ALTER COLUMN "status" SET NOT NULL;
