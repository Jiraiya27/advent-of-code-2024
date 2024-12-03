import { readline } from "../utils";

async function main() {
  let sum = 0;
  let isEnabled = true;

  const rl = readline("3/input.txt");
  for await (const line of rl) {
    const groups = line.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g);
    const product = groups.reduce((acc, instruction) => {
      if (instruction === "do()") {
        isEnabled = true;
        return acc;
      }
      if (instruction === "don't()") {
        isEnabled = false;
        return acc;
      }
      if (!isEnabled) {
        return acc;
      }
      const [num1Instruction, num2Instruction] = instruction.split(",");
      const num1 = Number(num1Instruction.slice(4));
      const num2 = Number(num2Instruction.slice(0, -1));
      return acc + num1 * num2;
    }, 0);
    sum += product;
  }

  console.log(sum);
}

main();
