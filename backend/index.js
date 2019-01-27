
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const socket = require('./socket.js')(io);

const path = require('path');

const   frontend_folder = path.join(
            __dirname,
            '../frontend')
,       backend_folder = 
            __dirname
,       frontend_socket_script = path.join(
            backend_folder,
            'frontend-socket.js')
,       frontend_entry = path.join(
            frontend_folder,
            'index.html')
,       frontend_home = 
            '/index.html';


server.listen(80);

app.use(express.static(frontend_folder));

app.get('/frontend-socket-script.js', function (req, res) {
  res.sendFile(frontend_socket_script);
});

