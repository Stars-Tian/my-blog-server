var koa = require('koa');
var http = require('http');
var https = require('https');
var session = require('koa-session2');
var koaBody = require('koa-body');
var app = new koa();
let SessionStore = require('./src/common/sessionStore'),
    store = new SessionStore();
app.keys = ['some secret hurr'];//required for signed cookies
const CONFIG = {
  key: 'koa:sc-ms-sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: false, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
  store:store
};
var appRouter = require('./src/router/app');
app.use(session(CONFIG, app));
app.use(appRouter.routes());
app.use(appRouter.allowedMethods());
app.use(async function(ctx, next) {
	await next();
});
http.createServer(app.callback()).listen(5001,()=>{
	console.log('Server running at http://localhost:5001/');
})