import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { caprinoOvinoPostData } from '../models/caprinoOvino';


export const caprinoOvinoRoutes = (app: FastifyInstance) => {
  
    app.get('/caprinoOvinos', async () => {
      const caprinoOvinos = await prisma.caprinoOvino.findMany();
      return { caprinoOvinos };
    });
  
    app.post('/caprinoOvinos', async (request) => {
      const body = request.body as caprinoOvinoPostData;
      const caprinoOvino = await prisma.caprinoOvino.create({ data: body });
      return { caprinoOvino };
    });
  };
