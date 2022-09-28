const net = require("net");

const listOfConnections = [];
// WAITER HANDBOOK

const configConnection = (connection) => {
  connection.setEncoding("utf-8");
  listOfConnections.push(connection);
};

const logAndGreetNewConnection = (connection) => {
  console.log("AH YISSS, something something connection");
  connection.write("Wazzzaaaaa \n");
};

const broadcastMessage = (message) => {
  for (const client of listOfConnections) {
    client.write(`${message}\n`);
  }
};

const broadcastMessageToEverybodyElse = (connection, message) => {
  for (const client of listOfConnections) {
    if (client !== connection) {
      client.write(`${message}\n`);
    }
  }
};

const parrotMessage = (connection, message) => {
  connection.write(`🦜:${message}`);
  console.log("Client:", message);
};

const server = net.createServer((connection) => {
  // connection is a socket object (from net.Socket)

  console.log("Beginning of the object of terror");
  // console.log(connection);
  console.log("End of the object of terror");
  configConnection(connection);

  logAndGreetNewConnection(connection);

  broadcastMessage("A new user connected");

  connection.on("data", (data) => {
    // broadcastMessageToEverybodyElse(connection, data);
    parrotMessage(connection, data);
  });

  connection.on("end", () => {
    // clean up
  });
});

server.listen(8000, () => {
  console.log("I'm listening to new clients!");
});
// What does it mean to be a waiter ? (Serveur)
// Listen to client needs
// To get tip (performant)
// Clean up

console.log("yeah.");

const today = new Date();

const arr = [];

const arr2 = new Array();

const obj1 = { a: 1 };
const obj2 = { a: 1 };

obj1 === obj2;

const someConnection = { connectionInfo: "blahahahahahah" };
const listOfCoolConnections = [];
listOfCoolConnections.push(someConnection);

const result = someConnection === listOfCoolConnections[0];

console.log(result);
