/**
 * Created by Michael M. Simon on 6/7/2018.
 */

const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const routeExample = require('./route/routerExamplejs')(router);

const port = 8080;

app.use('/route', routeExample);

app.use('/', (req, res)=> {
    if(req.method === 'GET' || req.url === '/'){
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    }
});


app.listen(port, ()=> {
    console.log('Server running at ' + port);
});
