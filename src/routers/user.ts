import { rule } from '@aomex/core';
import { params, response, query, body } from '@aomex/web';
import { Router } from '@aomex/router';
import { omit } from 'lodash-es';
import { models } from '../models';

export const router = new Router({ methodNotAllowed: true });

router.get('/users', {
  mount: [
    query({
      page: rule.int().default(1),
    }),
    response({
      statusCode: 200,
      contentType: 'json',
      schema: rule.array(models.user.validator.ofColumns),
    }),
  ],
  action: async (ctx) => {
    const users = await models.user.findAll();
    ctx.send(users);
  },
});

router.get('/users/:id', {
  mount: [
    params({
      id: models.user.validator.id,
    }),
    response({
      statusCode: 200,
      contentType: 'json',
      schema: models.user.validator.ofColumns,
    }),
  ],
  action: async (ctx) => {
    const user = await models.user.findById(ctx.params.id);
    if (!user) {
      ctx.throw(404, 'user not exists');
    } else {
      ctx.send(user);
    }
  },
});

router.post('/users', {
  mount: [
    body(omit(models.user.validator.ofColumns, 'id')),
    response({
      statusCode: 201,
      contentType: 'json',
      schema: models.user.validator.ofColumns,
    }),
  ],
  async action(ctx) {
    console.log(ctx.body);
    const result = await models.user.createUser(ctx.body);
    ctx.send(201, result);
  },
});
