import { readline } from "../utils";

const matrix = [];

const findValidDirections = (i, j) => {
  const validDirection = (_i, _j) => {
    return matrix[_i] && matrix[_i][_j] === "M";
  };

  return [
    validDirection(i - 1, j - 1) && 1,
    validDirection(i - 1, j) && 2,
    validDirection(i - 1, j + 1) && 3,
    validDirection(i, j - 1) && 4,
    validDirection(i, j + 1) && 6,
    validDirection(i + 1, j - 1) && 7,
    validDirection(i + 1, j) && 8,
    validDirection(i + 1, j + 1) && 9,
  ].filter(Boolean);
};

const isValidWord = (i, j, direction) => {
  let res;
  switch (direction) {
    case 1:
      res =
        matrix[i - 1]?.[j - 1] === "M" &&
        matrix[i - 2]?.[j - 2] === "A" &&
        matrix[i - 3]?.[j - 3] === "S";
      return res;
    case 2:
      res =
        matrix[i - 1]?.[j] === "M" &&
        matrix[i - 2]?.[j] === "A" &&
        matrix[i - 3]?.[j] === "S";
      return res;
    case 3:
      res =
        matrix[i - 1]?.[j + 1] === "M" &&
        matrix[i - 2]?.[j + 2] === "A" &&
        matrix[i - 3]?.[j + 3] === "S";
      return res;
    case 4:
      res =
        matrix[i]?.[j - 1] === "M" &&
        matrix[i]?.[j - 2] === "A" &&
        matrix[i]?.[j - 3] === "S";
      return res;
    case 6:
      res =
        matrix[i]?.[j + 1] === "M" &&
        matrix[i]?.[j + 2] === "A" &&
        matrix[i]?.[j + 3] === "S";
      return res;
    case 7:
      res =
        matrix[i + 1]?.[j - 1] === "M" &&
        matrix[i + 2]?.[j - 2] === "A" &&
        matrix[i + 3]?.[j - 3] === "S";
      return res;
    case 8:
      res =
        matrix[i + 1]?.[j] === "M" &&
        matrix[i + 2]?.[j] === "A" &&
        matrix[i + 3]?.[j] === "S";
      return res;
    case 9:
      res =
        matrix[i + 1]?.[j + 1] === "M" &&
        matrix[i + 2]?.[j + 2] === "A" &&
        matrix[i + 3]?.[j + 3] === "S";
      return res;
    default:
      return false;
  }
};

const matchWordCount = (i, j) => {
  const directions = findValidDirections(i, j);
  return directions.reduce((acc, direction) => {
    const count = isValidWord(i, j, direction) ? 1 : 0;
    return acc + count;
  }, 0);
};

async function main() {
  const rl = readline("4/input.txt");
  for await (const line of rl) {
    matrix.push(line.split(""));
  }

  let count = 0;
  matrix.forEach((row, i) => {
    row.forEach((char, j) => {
      if (char === "X") {
        count += matchWordCount(i, j, "X");
      }
    });
  });

  console.log(count);
}

main();
