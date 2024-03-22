/*
  Warnings:

  - Added the required column `detalhes` to the `Predio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Predio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Predio" ADD COLUMN     "detalhes" TEXT NOT NULL,
ADD COLUMN     "img" TEXT NOT NULL;
