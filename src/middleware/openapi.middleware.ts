import { openapi } from '@aomex/openapi';

export const openapiMiddleware = openapi({
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
});
