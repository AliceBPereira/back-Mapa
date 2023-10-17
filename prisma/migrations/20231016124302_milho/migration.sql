-- CreateTable
CREATE TABLE "Milho" (
    "id" TEXT NOT NULL,
    "talhao" TEXT NOT NULL,
    "area_ha" DECIMAL(65,30) NOT NULL,
    "sist_plant" TEXT NOT NULL,
    "espacament" TEXT NOT NULL,
    "sementes" TEXT NOT NULL,
    "prod_tha" INTEGER NOT NULL,
    "prod_2020" INTEGER NOT NULL,
    "plantio_21" TEXT NOT NULL,
    "plantio_20" TEXT NOT NULL,
    "localizacao" JSONB NOT NULL,

    CONSTRAINT "Milho_pkey" PRIMARY KEY ("id")
);
