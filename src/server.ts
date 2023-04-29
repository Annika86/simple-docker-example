const Koa = require('koa') ;
const serve = require('koa-static')

const app = new Koa();
const PORT = 3000;

app.use(serve('public'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
