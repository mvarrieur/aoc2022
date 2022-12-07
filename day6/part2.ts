import unique from "../utils/uniqueInArray.ts";

const sample = Deno.readTextFileSync("./sample.txt");
const input = Deno.readTextFileSync("./input.txt");

const signals = input;

let solution = -1;

const signal = signals.split("").reduce((acc, curr, idx, arr) => {
  if (acc.length < 14) {
    acc.push(curr);
  } else {
    acc.shift();
    acc.push(curr);
  }

  if (acc.filter(unique).length === 14) {
    solution = idx + 1;
    arr.splice(0); // Mutate the original array to empty as a way to break out of this reduce early
  }

  return acc;
}, [] as string[]);

console.log({ signal, solution });
