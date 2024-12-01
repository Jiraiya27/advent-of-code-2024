const fs = require("fs");
const _readline = require("readline");

export const readline = (filepath) => {
  const fileStream = fs.createReadStream(filepath);
  const rl = _readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  return rl;
};
