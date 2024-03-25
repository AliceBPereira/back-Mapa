-- CreateEnum
CREATE TYPE "StatusCafe" AS ENUM ('PLANTADO', 'COLHIDO');

-- CreateEnum
CREATE TYPE "StatusMilho" AS ENUM ('PLANTADO', 'COLHIDO');

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
    "localizacao" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "StatusCafe" NOT NULL,
    "quantidade_colhida" INTEGER NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Milho" (
    "id" TEXT NOT NULL,
    "talhao" TEXT NOT NULL,
    "area_ha" DECIMAL(65,30) NOT NULL,
    "sist_plant" TEXT NOT NULL,
    "espacament" TEXT NOT NULL,
    "sementes" TEXT NOT NULL,
    "trabalho_realizado" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "carretas" INTEGER NOT NULL,
    "prod_2020" INTEGER NOT NULL,
    "plantio_21" TEXT NOT NULL,
    "plantio_20" TEXT NOT NULL,
    "localizacao" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "StatusMilho" NOT NULL,
    "prox_colheita" TIMESTAMP(3) NOT NULL,
    "ult_colheita" TIMESTAMP(3) NOT NULL,
    "quantidade_colhida" INTEGER NOT NULL,

    CONSTRAINT "Milho_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "CaprinoOvino" (
    "id" TEXT NOT NULL,
    "talhao" TEXT NOT NULL,
    "localizacao" JSONB NOT NULL,
    "area_ha" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "CaprinoOvino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Predio" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "detalhes" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "localizacao" JSONB NOT NULL,

    CONSTRAINT "Predio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AreaCampus" (
    "id" TEXT NOT NULL,
    "localizacao" JSONB NOT NULL,

    CONSTRAINT "AreaCampus_pkey" PRIMARY KEY ("id")
);
