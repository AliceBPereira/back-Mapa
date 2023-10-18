import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import cors from "@fastify/cors";
import { cafePostData } from "../models/cafe";

export const cafeRoutes = (app: FastifyInstance) => {
  app.get("/cafes", async () => {
    const cafes = await prisma.cafe.findMany();
    return { cafes };
  });

  app.post("/cafes", async (request) => {
    const body = request.body as cafePostData;
    const cafe = await prisma.cafe.create({ data: body });
    return { cafe };
  });

  app.delete("/cafes/delete/:id", async (request) => {
    const { id } = request.params as { id: string };
    const existingCafe = await prisma.cafe.findUnique({
      where: { id },
    });

    if (!existingCafe) {
      return { message: "Café não encontrado" };
    }

    // Exclui o café se for encontrado
    const deletedCafe = await prisma.cafe.delete({
      where: { id },
    });

    return { cafe: deletedCafe };
  });

  app.put("/cafes/atualizar/:id", async (request) => {
    const { id } = request.params as { id: string };
    const body = request.body as cafePostData; // Alterei a variável de 'updatedCafe' para 'body'

    // Verifica se o café com o ID especificado existe
    const existingCafe = await prisma.cafe.findUnique({
      where: { id },
    });

    if (!existingCafe) {
      return { message: "Café não encontrado" };
    }

    // Atualiza o café se for encontrado
    const updatedCafe = await prisma.cafe.update({
      where: { id },
      data: body,
    });

    return { cafe: updatedCafe };
  });
};
