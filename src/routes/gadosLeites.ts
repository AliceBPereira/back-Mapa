import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { gadoLeitePostData } from '../models/gadoLeite';


export const gadosLeitesRoutes = (app: FastifyInstance) => {
  app.get("/gadosLeite/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
  
    const gadoLeite = await prisma.gadoLeite.findUnique({
      where: { id },
    });
  
    if (!gadoLeite) {
      reply.status(404).send({ message: 'Gado Corte não encontrado.' });
      return;
    }
  
    return { gadoLeite };
  });

    app.get('/gadosLeites', async () => {
        const gadosLeite = await prisma.gadoLeite.findMany()
      
        return {
            gadosLeite
        }
      })
      
      app.post('/gadosLeites', async (request) => {
        const body = request.body as gadoLeitePostData
      
        const gadoLeite = await prisma.gadoLeite.create({
          data: body
        })
      
        return {
            gadoLeite
        }
      });
      
  };