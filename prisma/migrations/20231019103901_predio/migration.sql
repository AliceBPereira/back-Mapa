-- CreateTable
CREATE TABLE "Predio" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "localizacao" JSONB NOT NULL,

    CONSTRAINT "Predio_pkey" PRIMARY KEY ("id")
);
