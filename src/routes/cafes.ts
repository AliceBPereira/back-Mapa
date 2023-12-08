import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import cors from "@fastify/cors";
import { cafePostData } from "../models/cafe";

interface QueryParams {
  ano_plantio: number;
  talhao: string;
  status: 'COLHIDO' | 'PLANTADO';
  estande: number;
}

export const cafeRoutes = (app: FastifyInstance) => {
  app.get("/cafes/last", async (request) => {

    const query = request.query as QueryParams;

    const cafes = await prisma.cafe.findMany({
      where: {
        ano_plantio: query.ano_plantio,
        talhao: query.talhao,
        status: query.status,
        estande: query.estande,
      }
    });

    const ultimoCafePorNome = cafes.reduce((acc, cafe) => {
      if (!acc[cafe.talhao] || cafe.ano_plantio >= acc[cafe.talhao].ano_plantio) {
        acc[cafe.talhao] = cafe;
      }
      return acc;
    }, {});

    const resultado = Object.values(ultimoCafePorNome);

    return { cafes: resultado };
  });

  app.get("/cafes", async (request) => {

    const query = request.query as QueryParams;

    const cafes = await prisma.cafe.findMany({
      where: {
        ano_plantio: query.ano_plantio,
        talhao: query.talhao,
        status: query.status,
        estande: query.estande,
      }
    });
    return { cafes };
  });

  app.get("/cafes/plantados", async () => {
    const cafes = await prisma.cafe.findMany({
      where: {
        status: 'PLANTADO'
      }
    });
    return { cafes };
  });
  app.get("/cafes/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
  
    const cafe = await prisma.cafe.findUnique({
      where: { id },
    });
  
    if (!cafe) {
      reply.status(404).send({ message: 'Café não encontrado.' });
      return;
    }
  
    return { cafe };
  });

  app.patch("/cafes/:id/colher", async (request, reply) => {
    const { id } = request.params as { id: string }

    const cafe = await prisma.cafe.findUnique({
      where: { id },
    })

    if (!cafe) {
      reply.status(400).send()
    }

    const cafes = await prisma.cafe.update({
      where: { id },
      data: { status: 'COLHIDO' }
    });
    return { cafes };
  });

  app.post("/cafes", async (request, reply) => {
    const body = request.body as cafePostData;

    const cafeAnterior = await prisma.cafe.findFirst({
      orderBy: { prox_colheita: 'desc' },
      where: { talhao: body.talhao }
    })

    if(cafeAnterior?.status === 'PLANTADO' && body.status === 'PLANTADO') {
      return reply.status(400).send({ message: 'Esse talhão já está plantado.'})
    }
  
    const ultimaColheita = body.ult_colheita || cafeAnterior?.prox_colheita || new Date().toISOString()
    const localizacao = body.localizacao || cafeAnterior?.localizacao

    if(!localizacao) {
      return reply.status(400).send({ message: 'Uma localização precisa ser passada'})
    }

    const cafe = await prisma.cafe.create({ data: {
      ...body,
      ult_colheita: ultimaColheita,
      localizacao: localizacao,  
    }});
    return { cafe };
  });

  app.delete("/cafes/delete/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const existingCafe = await prisma.cafe.findUnique({
      where: { id },
    });

    if (!existingCafe) {
      return reply.status(400).send()
    }

    // Exclui o café se for encontrado
    const deletedCafe = await prisma.cafe.delete({
      where: { id },
    });

    return { cafe: deletedCafe };
  });

  app.put("/cafes/atualizar/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const body = request.body as cafePostData; // Alterei a variável de 'updatedCafe' para 'body'

    // Verifica se o café com o ID especificado existe
    const existingCafe = await prisma.cafe.findUnique({
      where: { id },
    });

    if (!existingCafe) {
      return reply.status(400).send()
    }

    // Atualiza o café se for encontrado
    const updatedCafe = await prisma.cafe.update({
      where: { id },
      data: body,
    });

    return { cafe: updatedCafe };
  });
};
