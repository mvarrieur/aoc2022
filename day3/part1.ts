import unique from "../utils/uniqueInArray.ts";

async function run() {
  const input = await Deno.readTextFile("./input.txt");
  const lines = input.split("\n");

  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );

  const dupes: string[] = [];
  lines.forEach((sacks) => {
    const compartment1 = sacks
      .substring(0, sacks.length / 2)
      .split("")
      .filter(unique);
    const compartment2 = sacks.substring(sacks.length / 2).split("");

    compartment1.forEach((letter) => {
      if (compartment2.indexOf(letter) !== -1) {
        dupes.push(letter);
      }
    });
  });

  const sum = dupes.reduce((acc, current) => {
    acc += alphabet.indexOf(current) + 1;

    return acc;
  }, 0);
}

run();
