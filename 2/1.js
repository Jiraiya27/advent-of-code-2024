import { readline } from "../utils";

function isSafe(row) {
  let direction = row[1] > row[0] ? "INC" : "DEC";

  for (let i = 1; i < row.length; i++) {
    const prev = row[i - 1];
    const num = row[i];
    if (direction === "INC" && (num <= prev || num - prev > 3)) return false;
    if (direction === "DEC" && (num >= prev || prev - num > 3)) return false;
  }
  return true;
}

async function main() {
  const rows = [];

  const rl = readline("2/2-input.txt");
  for await (const line of rl) {
    const nums = line.split(/\s+/);
    rows.push(nums.map(Number));
  }

  const safeRows = rows.filter(isSafe).length;
  console.log(safeRows);
}

main();
