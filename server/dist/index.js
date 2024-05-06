"use strict";
// import WebSocket from "ws";
//
//
// const server = new WebSocket.Server({
//     port: 6000
// });
//
// let sockets: WebSocket[] = [];
// server.on('connection', function (socket) {
//     console.log('CONNECTED: ', socket);
//     sockets.push(socket);
//
//     // When you receive a message, send that message to every socket.
//     socket.on('message', function (msg) {
//         console.log('MESSAGE: ', msg);
//         sockets.forEach(s => s.send(msg));
//     });
//
//     // When a socket closes, or disconnects, remove it from the array.
//     socket.on('close', function () {
//         sockets = sockets.filter(s => s !== socket);
//     });
// });
//
//
// server.on('listening', () => {
//     console.log('Listening on port 6000');
// });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import http from 'http';
// import ws from 'ws';
//
// // const ws = new WebSocket({ port: '6000' });
// const wss = new ws.Server({ noServer: true });
//
// const clients = new Set<ws>();
//
// const server = http.createServer((req, res) => {
//     // here we only handle websocket connections
//     // in real project we'd have some other code here to handle non-websocket requests
//     wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
// });
//
// function onSocketConnect(ws: ws) {
//     clients.add(ws);
//
//     ws.on('message', function (message) {
//         message = message.slice(0, 50); // max message length will be 50
//
//         for (let client of clients) {
//             client.send(message);
//         }
//     });
//
//     ws.on('close', function () {
//         clients.delete(ws);
//     });
// }
//
//
// server.listen(6000, () => console.log('listening'));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ws_1 = require("ws");
const server = https_1.default.createServer({
    cert: fs_1.default.readFileSync(path_1.default.resolve('./src/certificate.pem')),
    key: fs_1.default.readFileSync(path_1.default.resolve('./src/key.pem'))
});
const wss = new ws_1.WebSocketServer({ server });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(msg) {
        console.log(msg.toString());
    });
});
server.listen(8000, () => {
    console.log('Listening on 8000');
});
