import Server from './server/config.js';

const server = new Server();


server.app.use('/api/movies');
server.listen();