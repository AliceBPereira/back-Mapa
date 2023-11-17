import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { caprinoOvinoPostData } from '../models/caprinoOvino';


export const caprinoOvinoRoutes = (app: FastifyInstance) => {
  app.get("/caprinoOvinos/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
  
    const caprinoOvino = await prisma.caprinoOvino.findUnique({
      where: { id },
    });
  
    if (!caprinoOvino) {
      reply.status(404).send({ message: 'Café não encontrado.' });
      return;
    }
  
    return { caprinoOvino };
  });
    app.get('/caprinoOvinos', async () => {
      const caprinoOvinos = await prisma.caprinoOvino.findMany();
      return { caprinoOvinos };
    });
  
    app.post('/caprinoOvinos', async (request) => {
      const body = request.body as caprinoOvinoPostData;
      const caprinoOvino = await prisma.caprinoOvino.create({ data: body });
      return { caprinoOvino };
    });
    
  app.delete("/caprinoOvinos/delete/:id", async (request) => {
    const { id } = request.params as { id: string };
    const existingcaprinoOvino = await prisma.caprinoOvino.findUnique({
      where: { id },
    });
    if (!existingcaprinoOvino) {
      return { message: "caprinoOvino não encontrado" };
    }
    const deletedcaprinoOvino = await prisma.caprinoOvino.delete({
      where: { id },
    });
    return { cafe: deletedcaprinoOvino };
  });

  app.put("/caprinoOvinos/atualizar/:id", async (request) => {
    const { id } = request.params as { id: string };
    const body = request.body as caprinoOvinoPostData; 
    const existingcaprinoOvino = await prisma.caprinoOvino.findUnique({
      where: { id },
    });
    if (!existingcaprinoOvino) {
      return { message: "caprinoOvino não encontrado" };
    }

    const updatedcaprinoOvino = await prisma.caprinoOvino.update({
      where: { id },
      data: body,
    });

    return { cafe: updatedcaprinoOvino };
  });
  };
