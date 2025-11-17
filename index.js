import router from './routes/index.routes.js';
import Server from './server/config.js';

const server = new Server();


server.app.use('/api', router);
server.listen();