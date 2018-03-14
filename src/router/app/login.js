
var login = (router)=>{
	router.post('/login', async(ctx, next)=>{
		ctx.body = {
			data:'9999'
		}
	})
	router.get('/pp' ,async(ctx, next)=>{
		ctx.body = {
			data:'9999'
		}
	})
}
module.exports = function(router){
	login(router)
}
