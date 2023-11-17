import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { gadoCortePostData } from '../models/gadoCorte';


export const gadosCortesRoutes = (app: FastifyInstance) => {
  app.get("/gadosCorte/:id", async (request, reply) => {
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
    app.get('/gadosCorte', async () => {
        const gadosCorte = await prisma.gadoCorte.findMany()
      
        return {
          gadosCorte
        }
      })
      
      app.post('/gadosCorte', async (request) => {
        const body = request.body as gadoCortePostData
      
        const gadoCorte = await prisma.gadoCorte.create({
          data: body
        })
      
        return {
          gadoCorte
        }
      });
      
  };