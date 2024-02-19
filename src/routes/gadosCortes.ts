import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { gadoCortePostData } from '../models/gadoCorte';


export const gadosCortesRoutes = (app: FastifyInstance) => {
  app.get("/gadosCortes/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
  
    const gadoCorte = await prisma.gadoCorte.findUnique({
      where: { id },
    });
  
    if (!gadoCorte) {
      reply.status(404).send({ message: 'Gado Corte não encontrado.' });
      return;
    }
  
    return { gadoCorte };
  });
    app.get('/gadosCortes', async () => {
        const gadosCortes = await prisma.gadoCorte.findMany()
      
        return {
          gadosCortes
        }
      })
      
      app.post('/gadosCortes', async (request) => {
        const body = request.body as gadoCortePostData
      
        const gadoCorte = await prisma.gadoCorte.create({
          data: body
        })
      
        return {
          gadoCorte
        }
      });
      
  };