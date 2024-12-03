import { readline } from "../utils";

async function main() {
  let sum = 0;

  const rl = readline("3/input.txt");
  for await (const line of rl) {
    const mulGroups = line.match(/mul\(\d+,\d+\)/g);
    const product = mulGroups.reduce((acc, instruction) => {
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
