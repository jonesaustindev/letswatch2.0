require('dotenv').config({
    path: 'variables.env'
});
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const createServer = require('./createServer');
const db = require('./db');
const cors = require('cors');

const server = createServer();

server.express.use(cookieParser());
server.express.options('*', cors());

server.express.use((req, res, next) => {
    const { token } = req.cookies;
    if(token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        req.userId = userId;
    }
    next();
});

server.start(
    // cors: {
    //     credentials: true,
    //     origin: 'https://lets-watch-next-prod.herokuapp.com/'
    // }
 details => {
    console.log(`Let's Watch server is now running on port http:/localhost:${details.port}`);
});