import { ConsoleApp } from '@aomex/console';
import { openapi } from '@aomex/openapi';

const app = new ConsoleApp();
app.mount(
  openapi({
    commandName: 'openapi',
    routers: './src/routers',
    output: './swagger-vite/public/openapi.json',
    renderWarnings: true,
    prettyJson: true,
    docs: {
      servers: [
        {
          url: 'http://localhost:3000',
          description: '本地开发环境',
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
