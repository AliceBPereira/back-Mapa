import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma'
import { gadoCortePostData } from '../models/gadoCorte';


export const gadosCortesRoutes = (app: FastifyInstance) => {
  
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