import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { gadoLeitePostData } from '../models/gadoLeite';


export const gadosLeitesRoutes = (app: FastifyInstance) => {
  
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