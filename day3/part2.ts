import unique from "../utils/uniqueInArray.ts";

async function run() {
  const input = await Deno.readTextFile("./input.txt");
  const lines = input.split("\n");

  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );
  const dupes: string[] = [];

  const groups = lines.reduce((acc, cur, idx) => {
    if (idx % 3 === 0) {
      acc.push([cur]);
    } else {
      acc[acc.length - 1].push(cur);
    }
    return acc;
  }, [] as string[][]);

  groups.forEach((group) => {
    const [elf1, elf2, elf3] = group.map((g) => g.split("").filter(unique));

    dupes.push(
      elf1
        .filter((letter) => elf2.includes(letter) && elf3.includes(letter))
        .shift()
    );
  });

  const sum = dupes.reduce((acc, current) => {
    acc += alphabet.indexOf(current) + 1;

    return acc;
  }, 0);

  console.log({ sum });
}

run();
