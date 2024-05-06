import https from 'https';
import fs from 'fs';
import path from 'path';
import { WebSocketServer } from 'ws';
import { WS_PORT } from '../../ws-config';


const server = https.createServer({
    cert: fs.readFileSync(path.resolve('./src/certificate.pem')),
    key: fs.readFileSync(path.resolve('./src/key.pem'))
});

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
});

server.listen(WS_PORT, () => {
    console.log(`Listening on ${WS_PORT}`);
});
