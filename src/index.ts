import * as http from "http";

import app from "./app";
import db from "./models";

import { normalizePort, onError, onListening } from "./utils/utils";
import { AddressInfo } from "net";

const server = http.createServer(app);
const port = normalizePort(process.env.port || 3035);

db.sequelize.sync().then(() => {
  server.listen(port, () => {
    const { port } = server.address() as AddressInfo;

    server.on("error", onError(server, port)); // Não está funcionando
  });

  server.on("listening", onListening(server));
});
