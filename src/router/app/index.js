var router = require('koa-router')({
	prefix:'/app'
});
require('./login')(router);
module.exports = router;