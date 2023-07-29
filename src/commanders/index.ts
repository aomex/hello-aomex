import { Commander } from '@aomex/commander';
import { options } from '@aomex/console';
import { rule } from '@aomex/core';

export const commander = new Commander();

commander.create('say', {
  docs: {
    summary: '向某人问好',
  },
  mount: [
    options(
      {
        name: rule.string().default('World'),
      },
      {
        name: '',
      },
    ),
  ],
  action(ctx) {
    console.log('Hello ' + ctx.options.name);
  },
});
