import { WS_HOST, WS_PORT } from '../../../../ws-config';


declare const self: DedicatedWorkerGlobalScope;


const ws = new WebSocket(`wss://${WS_HOST}:${WS_PORT}`);
ws.onopen = () => console.log("OPENED");
ws.onmessage = e => self.postMessage(JSON.parse(e.data));


self.onmessage = e => {
    console.log('MSG: ', e.data);
    ws.send(JSON.stringify(e.data));
};
