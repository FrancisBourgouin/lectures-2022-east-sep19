const fs = require("fs");
const zlib = require("zlib");

const bigFatArray = [];
const val = 80 * 60;
for (let i = 0; i < val; i++) {
  if (Math.random() > 0.5) {
    bigFatArray.push(1);
  } else {
    bigFatArray.push(2);
  }
}

const compArr = zlib.gzipSync(JSON.stringify(bigFatArray));

fs.writeFileSync("./test.json.gz", compArr);
