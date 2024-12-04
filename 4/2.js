import { readline } from "../utils";

const matrix = [];

const isValidWord = (i, j) => {
  const topLeftToBottomRight =
    (matrix[i - 1]?.[j - 1] === "M" && matrix[i + 1]?.[j + 1] === "S") ||
    (matrix[i - 1]?.[j - 1] === "S" && matrix[i + 1]?.[j + 1] === "M");
  const topRightToBottomLeft =
    (matrix[i - 1]?.[j + 1] === "M" && matrix[i + 1]?.[j - 1] === "S") ||
    (matrix[i - 1]?.[j + 1] === "S" && matrix[i + 1]?.[j - 1] === "M");

  return topLeftToBottomRight && topRightToBottomLeft;
};

async function main() {
  const rl = readline("4/input.txt");
  for await (const line of rl) {
    matrix.push(line.split(""));
  }

  let count = 0;
  matrix.forEach((row, i) => {
    row.forEach((char, j) => {
      if (char === "A" && isValidWord(i, j)) {
        count += 1;
      }
    });
  });

  console.log(count);
}

main();
