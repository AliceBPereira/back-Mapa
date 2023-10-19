/*
  Warnings:

  - The `localizacao` column on the `Predio` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Predio" DROP COLUMN "localizacao",
ADD COLUMN     "localizacao" DOUBLE PRECISION[];
