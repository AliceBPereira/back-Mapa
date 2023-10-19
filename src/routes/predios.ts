import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import cors from "@fastify/cors";
import { predioPostData } from "../models/predio";

export const predioRoutes = (app: FastifyInstance) => {
  app.get("/predios", async () => {
    const predios = await prisma.predio.findMany();
    return { predios };
  });

  app.post("/predios", async (request) => {
    const body = request.body as predioPostData;
    const predio = await prisma.predio.create({ data: body });
    return { predio };
  });

  app.delete("/predios/delete/:id", async (request) => {
    const { id } = request.params as { id: string };
    const existingpredio = await prisma.predio.findUnique({
      where: { id },
    });

    if (!existingpredio) {
      return { message: "predio não encontrado" };
    }

    // Exclui o café se for encontrado
    const deletedpredio = await prisma.predio.delete({
      where: { id },
    });

    return { predio: deletedpredio };
  });

  app.put("/predios/atualizar/:id", async (request) => {
    const { id } = request.params as { id: string };
    const body = request.body as predioPostData; // Alterei a variável de 'updatedCafe' para 'body'

    // Verifica se o café com o ID especificado existe
    const existingpredio = await prisma.predio.findUnique({
      where: { id },
    });

    if (!existingpredio) {
      return { message: "Café não encontrado" };
    }

    // Atualiza o café se for encontrado
    const updatedpredio = await prisma.predio.update({
      where: { id },
      data: body,
    });

    return { predio: updatedpredio };
  });
};
