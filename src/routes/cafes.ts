import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import cors from '@fastify/cors'
import { cafePostData } from '../models/cafe'


export const cafeRoutes = (app: FastifyInstance) => {
  
    app.get('/cafes', async () => {
      const cafes = await prisma.cafe.findMany();
      return { cafes };
    });
  
    app.post('/cafes', async (request) => {
      const body = request.body as cafePostData;
      const cafe = await prisma.cafe.create({ data: body });
      return { cafe };
    });
  };
