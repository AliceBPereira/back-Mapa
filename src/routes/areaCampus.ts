import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { areaCampusPostData } from '../models/areaCapus';


export const areaCampusRoutes = (app: FastifyInstance) => {
  
    app.get('/areaCampus', async () => {
        const areaCampus = await prisma.areaCampus.findMany()
      
        return {
            areaCampus
        }
      })
      
      app.post('/areaCampus', async (request) => {
        const body = request.body as areaCampusPostData
      
        const areaCampus = await prisma.areaCampus.create({
          data: body
        })
      
        return {
            areaCampus
        }
      });
      
  };