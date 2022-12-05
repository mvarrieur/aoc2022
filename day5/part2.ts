const inputStacks = [
  ["R", "C", "H"],
  ["F", "S", "L", "H", "J", "B"],
  ["Q", "T", "J", "H", "D", "M", "R"],
  ["J", "B", "Z", "H", "R", "G", "S"],
  ["B", "C", "D", "T", "Z", "F", "P", "R"],
  ["G", "C", "H", "T"],
  ["L", "W", "P", "B", "Z", "V", "N", "S"],
  ["C", "G", "Q", "J", "R"],
  ["S", "F", "P", "H", "R", "T", "D", "L"],
];
const sampleStacks = [["N", "Z"], ["D", "C", "M"], ["P"]];
const sample = Deno.readTextFileSync("./sample.txt").split("\n");
const input = Deno.readTextFileSync("./input.txt").split("\n");

const instructions = input;
const stacks = inputStacks;

instructions.forEach((i) => {
  const matches = i.match(/^move (\d+) from (\d+) to (\d+)/);

  if (matches) {
    const amount = +matches[1];
    const from = +matches[2];
    const to = +matches[3];

    console.log(`Moving ${amount} from ${from} to ${to}`);

    const items = stacks[from - 1].splice(0, amount);

    console.log({ items });

    stacks[to - 1].unshift(...items);
  }
});

const solution = stacks.reduce((acc, curr) => {
  acc += curr[0] ?? "";

  return acc;
}, "");
console.log({ solution });
