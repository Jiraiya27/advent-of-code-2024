import { readline } from "../utils";

function isSafe(row) {
  let direction = row[1] > row[0] ? "INC" : "DEC";

  for (let i = 1; i < row.length; i++) {
    const prev = row[i - 1];
    const num = row[i];
    if (direction === "INC" && (num <= prev || num - prev > 3)) return i;
    if (direction === "DEC" && (num >= prev || prev - num > 3)) return i;
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

  const safeRows = rows.filter((row) => {
    const safe = isSafe(row);
    if (safe !== true) {
      const retryRemoveFirst = isSafe(row.filter((_, i) => i !== 0));
      const retryBefore = isSafe(row.filter((_, i) => i !== safe - 1));
      const retryCurrent = isSafe(row.filter((_, i) => i !== safe));
      const retryAfter = isSafe(row.filter((_, i) => i !== safe + 1));
      return (
        retryRemoveFirst === true ||
        retryBefore === true ||
        retryCurrent === true ||
        retryAfter === true
      );
    }
    return true;
  }).length;
  console.log(safeRows);
}

main();
