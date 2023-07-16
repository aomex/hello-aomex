import { WebApp } from '@aomex/web';
import { routers } from '@aomex/router';

const app = new WebApp();

app.mount(routers('./src/routers'));

app.listen(3000, () => {
  console.log('Server started. Open http://localhost:3000');
});
