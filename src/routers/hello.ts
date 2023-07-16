import { Router } from '@aomex/router';

export const router = new Router();

router.get('/', {
  action(ctx) {
    ctx.send('Hello world');
  },
});
