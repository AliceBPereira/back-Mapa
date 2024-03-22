/*
  Warnings:

  - You are about to drop the column `prod_tha` on the `Milho` table. All the data in the column will be lost.
  - Added the required column `carretas` to the `Milho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodo` to the `Milho` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trabalho_realizado` to the `Milho` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Milho" DROP COLUMN "prod_tha",
ADD COLUMN     "carretas" INTEGER NOT NULL,
ADD COLUMN     "periodo" TEXT NOT NULL,
ADD COLUMN     "trabalho_realizado" TEXT NOT NULL;
