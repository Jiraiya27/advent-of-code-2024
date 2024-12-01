import { readline } from "../utils";

async function main() {
  const col1 = [];
  const col2Frequency = {};

  const rl = readline("1/1-input.txt");
  for await (const line of rl) {
    const [item1, item2] = line.split(/\s+/);
    col1.push(Number(item1));

    const num2 = Number(item2);
    if (!col2Frequency[num2]) col2Frequency[num2] = 0;
    col2Frequency[num2] += 1;
  }

  const similaritySum = col1.reduce((acc, item1) => {
    const frequency = col2Frequency[item1] ?? 0;
    const similarityScore = item1 * frequency;
    return acc + similarityScore;
  }, 0);

  console.log(similaritySum);
}

main();
