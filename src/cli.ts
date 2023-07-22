import { ConsoleApp } from '@aomex/console';
import { openapiMiddleware } from './middleware/openapi.middleware';

const app = new ConsoleApp();
app.mount(openapiMiddleware);

const code = await app.run();
process.exit(code);
