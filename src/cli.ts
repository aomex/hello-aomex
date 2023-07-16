import { ConsoleApp } from '@aomex/console';
import { openapi } from '@aomex/openapi';

const app = new ConsoleApp();
app.mount(
  openapi({
    commandName: 'openapi',
    routers: './src/routers',
    renderWarnings: true,
    prettyJson: true,
    docs: {
      servers: [
        {
          url: 'http://www.example.com',
        },
      ],
      externalDocs: {
        url: 'http://www.example.com',
      },
    },
  }),
);

const code = await app.run();
process.exit(code);
