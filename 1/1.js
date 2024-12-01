import { readline } from "../utils";

async function main() {
  const col1 = [];
  const col2 = [];

  const rl = readline("1/1-input.txt");
  for await (const line of rl) {
    const [item1, item2] = line.split(/\s+/);
    col1.push(Number(item1));
    col2.push(Number(item2));
  }

  col1.sort();
  col2.sort();

  const diffSum = col1.reduce((acc, item1, i) => {
    const item2 = col2[i];
    const diff = Math.abs(item2 - item1);
    return acc + diff;
  }, 0);

  console.log(diffSum);
}

main();
