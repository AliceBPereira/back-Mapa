-- CreateTable
CREATE TABLE "Cafe" (
    "id" TEXT NOT NULL,
    "talhao" TEXT NOT NULL,
    "cultivar" TEXT NOT NULL,
    "area_ha" DECIMAL(65,30) NOT NULL,
    "espacament" TEXT NOT NULL,
    "estande" INTEGER NOT NULL,
    "n_de_plantas" INTEGER NOT NULL,
    "ano_plantio" INTEGER NOT NULL,
    "ult_colheita" TIMESTAMP(3) NOT NULL,
    "prox_colheita" TIMESTAMP(3) NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("id")
);
