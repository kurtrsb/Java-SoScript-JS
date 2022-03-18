'use strict'

import example from "./example/index.js"
import '../database.js'
import {sosie} from '../database.js'

export default async function (fastify, opts) {
  /*fastify.get('/', async function (request, reply) {
    return { root: false }
  })*/
  fastify.post('/create', async function (request, reply) {
    if (!request.body?.name) {
      return reply.code(400).send('Le nom est obligatoire')
    }
    return await sosie.create({
      name: request.body.name,
      type: request.body.type,
      desc: request.body.desc,
      image: request.body.image,
      price: request.body.price
    });
  })

  fastify.put('/:id', async function ({ params, body }, reply) {
    const id = params.id;
    let changes = {};
    if (!body || !body.name && !body.type && !body.desc && !body.price && !body.image) return null;
    if (body.name) changes.name = body.name;
    if (body.type) changes.type= body.type;
    if (body.desc) changes.desc = body.desc;
    if (body.image) changes.image = body.image;
    if (body.price) changes.price = body.price;
    sosie.update(body, {
      where: {
        id
      }
    })
    
    return "Mis à jour"
  });

  fastify.delete('/:id', async function ({ params, body }, reply) {
    const id = params.id;
    sosie.destroy({
      where: {
        id
      }
    })
    return "Suppresion"
  });


  fastify.post('/db', async function (request, reply){
    return await sosie.findAll()
  })
  fastify.register(example, {prefix: 'example'})
}
