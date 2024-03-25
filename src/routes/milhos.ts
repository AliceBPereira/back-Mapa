import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import cors from '@fastify/cors'
import { milhoPostData } from '../models/milho';

interface QueryParams {
 

  talhao: string;
  status: 'COLHIDO' | 'PLANTADO';
  
}

export const milhoRoutes = (app: FastifyInstance) => {
  app.get("/milhos/last", async (request) => {

    const query = request.query as QueryParams;

    const milhos = await prisma.milho.findMany({
      where: {
        
        talhao: query.talhao,
        status: query.status,
       
      }
    });
    const ultimoMilhoPorNome = milhos.reduce((acc, milho) => {
      if (!acc[milho.talhao] || milho.periodo >= acc[milho.talhao].prod_tha) {
        acc[milho.talhao] = milho;
      }
      return acc;
    }, {});

    const resultado = Object.values(ultimoMilhoPorNome);

    return { milhos: resultado };
  });
  




  app.get("/milhos/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
  
    const milho = await prisma.milho.findUnique({
      where: { id },
    });
  
    if (!milho) {
      reply.status(404).send({ message: 'MILHO não encontrado.' });
      return;
    }
  
    return { milho };
  });
  app.patch("/milhos/:id/colher", async (request, reply) => {
    const { id } = request.params as { id: string }

    const milho = await prisma.milho.findUnique({
      where: { id },
    })

    if (!milho) {
      reply.status(400).send()
    }

    const milhos = await prisma.milho.update({
      where: { id },
      data: { status: 'COLHIDO' }
    });
    return { milhos };
  });

    app.get('/milhos', async (request) => {
      
      const query = request.query as QueryParams;

      const milhos = await prisma.milho.findMany({
        where: {
          
          talhao: query.talhao,
          status: query.status,
          
        }
      });
      return { milhos };
    });
  
    app.get("/milhos/plantados", async () => {
      const milhos = await prisma.milho.findMany({
        where: {
          status: 'PLANTADO'
        }
      });
      return { milhos };
    });
  
    
    app.post("/milhos", async (request, reply) => {
      const body = request.body as milhoPostData;
  
      const milhoAnterior = await prisma.milho.findFirst({
        orderBy: { periodo: 'desc' },
        where: { talhao: body.talhao }
      })
  
      if(milhoAnterior?.status === 'PLANTADO' && body.status === 'PLANTADO') {
        return reply.status(400).send({ message: 'Esse talhão já está plantado.'})
      }
    
      const ultimaColheita = body.ult_colheita || milhoAnterior?.prox_colheita || new Date().toISOString()
      const localizacao = body.localizacao || milhoAnterior?.localizacao
  
      if(!localizacao) {
        return reply.status(400).send({ message: 'Uma localização precisa ser passada'})
      }
  
      const milho = await prisma.milho.create({ data: {
        ...body,
        ult_colheita: ultimaColheita,
        localizacao: localizacao,  
      }});
      return { milho };
    });
  
    app.delete("/milhos/delete/:id", async (request, reply) => {
      const { id } = request.params as { id: string };
      const existingMilho = await prisma.milho.findUnique({
        where: { id },
      });
  
      if (!existingMilho) {
        return reply.status(400).send()
      }
  
      // Exclui o café se for encontrado
      const deletedMilho = await prisma.milho.delete({
        where: { id },
      });
  
      return { milho: deletedMilho };
    });
  
    app.put("/milhos/atualizar/:id", async (request, reply) => {
      const { id } = request.params as { id: string };
      const body = request.body as milhoPostData; 
  
      // Verifica se o café com o ID especificado existe
      const existingMilho = await prisma.milho.findUnique({
        where: { id },
      });
  
      if (!existingMilho) {
        return reply.status(400).send()
      }
  
      // Atualiza o café se for encontrado
      const updatedMilho = await prisma.milho.update({
        where: { id },
        data: body,
      });
  
      return { milho: updatedMilho };
    });
  };