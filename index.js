const app = require("./app");
const http = require("http");
const { PPORT } = require("./utils/config");
const { info } = require("./utils/logger");

const server = http.createServer(app);

server.listen(PPORT, () => {
  info(`Server running on port ${PPORT}`);
});
