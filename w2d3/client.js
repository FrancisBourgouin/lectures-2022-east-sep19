const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const client = net.createConnection({ host: "localhost", port: 8000 }, () => {
  console.log("connected to server!");
  client.setEncoding("utf-8");

  // setInterval(() => {
  //   client.write("HELLO HOW ARE YOU");
  // }, 1000);
});

client.on("data", (data) => {
  console.log(data);
});

rl.on("line", (input) => {
  console.log(`Received: ${input}`);
  client.write(input);
});

Math.floor(Math.random() * 4);
