/*
  Warnings:

  - Added the required column `quantidade_colhida` to the `Cafe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cafe" ADD COLUMN     "quantidade_colhida" INTEGER NOT NULL;
