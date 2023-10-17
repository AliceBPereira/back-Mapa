/*
  Warnings:

  - You are about to drop the column `latitude` on the `Cafe` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Cafe` table. All the data in the column will be lost.
  - Added the required column `coordenadas` to the `Cafe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cafe" DROP COLUMN "latitude",
DROP COLUMN "longitude",
ADD COLUMN     "coordenadas" JSONB NOT NULL;
