-- CreateTable
CREATE TABLE "GadoCorte" (
    "id" TEXT NOT NULL,
    "Nome_pasto" TEXT NOT NULL,
    "area_ha" DECIMAL(65,30) NOT NULL,
    "Forrageira" TEXT NOT NULL,
    "Raca" TEXT NOT NULL,
    "Pastejo" TEXT NOT NULL,
    "localizacao" JSONB NOT NULL,

    CONSTRAINT "GadoCorte_pkey" PRIMARY KEY ("id")
);
