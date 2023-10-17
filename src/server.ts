import fastify from 'fastify'
import cors from '@fastify/cors'
import { cafeRoutes } from './routes/cafes';
import { milhoRoutes } from './routes/milhos';
import { gadosCortesRoutes } from './routes/gadosCortes';
import { gadosLeitesRoutes } from './routes/gadosLeites';
import { caprinoOvinoRoutes } from './routes/caprinoOvinos';

export const app = fastify()
app.register(cors)


cafeRoutes(app);
milhoRoutes(app);
gadosCortesRoutes(app);
gadosLeitesRoutes(app);
caprinoOvinoRoutes(app);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running on PORT 3333!')
  })
