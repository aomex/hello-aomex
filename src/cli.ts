import { ConsoleApp } from '@aomex/console';
import { openapiMiddleware } from './middleware/openapi.middleware';
import { commanders } from '@aomex/commander';

const app = new ConsoleApp();
app.mount(openapiMiddleware);
app.mount(commanders('./src/commanders'));

const code = await app.run();
process.exit(code);
