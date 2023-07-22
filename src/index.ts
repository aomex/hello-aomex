import { WebApp } from '@aomex/web';
import { routers } from '@aomex/router';

const app = new WebApp();

app.mount(routers('./src/routers'));

const port = process.env['PORT'] || 3000;
app.listen(port, () => {
  console.log('Server started. Open http://localhost:' + port);
});
