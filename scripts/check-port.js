const net = require("net");

const PORT = 3000;

const server = net.createServer();

server.once("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error("\n==================================================");
    console.error(`ERROR: Port ${PORT} is already in use!`);
    console.error("This is likely a stale Next.js dev server process.");
    console.error("Please terminate the zombie process or port listener");
    console.error("before starting this development server.");
    console.error("==================================================\n");
    process.exit(1);
  }
});

server.once("listening", () => {
  server.close();
  process.exit(0);
});

server.listen(PORT);
