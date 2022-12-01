async function run() {
  const input = await Deno.readTextFile("./input.txt");
  const lines = input.split("\n");
  const elves = lines.reduce((acc, curr) => {
    if (!acc.length) {
      acc.push([]);
    } else if (curr === "") {
      acc.push([]);
      return acc;
    }

    acc[acc.length - 1].push(+curr);

    return acc;
  }, [] as number[][]);

  const cals = elves
    .map((e) => {
      const sum = e.reduce((a, b) => a + b, 0);

      return sum;
    })
    .sort((a, b) => {
      if (a < b) return 1;

      return -1;
    });

  console.log({ part1: cals[0], part2: cals[0] + cals[1] + cals[2] });
}

run();
