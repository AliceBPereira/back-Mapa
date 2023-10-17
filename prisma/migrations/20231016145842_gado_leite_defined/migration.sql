-- CreateTable
CREATE TABLE "GadoLeite" (
    "id" TEXT NOT NULL,
    "Piquete" TEXT NOT NULL,
    "area_ha" DECIMAL(65,30) NOT NULL,
    "Forrageira" TEXT NOT NULL,
    "Raca" TEXT NOT NULL,
    "Estagio" TEXT NOT NULL,
    "Pastejo" TEXT NOT NULL,
    "localizacao" JSONB NOT NULL,

    CONSTRAINT "GadoLeite_pkey" PRIMARY KEY ("id")
);
