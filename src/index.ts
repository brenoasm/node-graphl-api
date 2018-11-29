import * as http from 'http';

import app from './app';

import { normalizePort, onError, onListening } from './utils/utils';
import { AddressInfo } from 'net';

const server = http.createServer(app);
const port = normalizePort(process.env.port || 3035);

server.listen(port, () => {
  const { port } = server.address() as AddressInfo;

  server.on('error', onError(server, port));
});

server.on('listening', onListening(server));
