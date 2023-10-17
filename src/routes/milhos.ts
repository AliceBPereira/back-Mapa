import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import cors from '@fastify/cors'
import { milhoPostData } from '../models/milho';


export const milhoRoutes = (app: FastifyInstance) => {
  
    app.get('/milhos', async () => {
        const milhos = await prisma.milho.findMany()
      
        return {
          milhos
        }
      })
      
      app.post('/milhos', async (request) => {
        const body = request.body as milhoPostData
      
        const milho = await prisma.milho.create({
          data: body
        })
      
        return {
          milho
        }
      });
  };