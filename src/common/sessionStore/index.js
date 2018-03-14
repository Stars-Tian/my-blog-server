
const session = require('koa-session2');
let { Store } = session;

class SessionStore extends Store{
	async set(session, {sid = this.getID(24)}) {
        // save your session object
        this.sessions[sid] = session
        return sid
    }
    
    async get(sid) {
        return this.sessions[sid]
    }
}

module.exports = SessionStore;