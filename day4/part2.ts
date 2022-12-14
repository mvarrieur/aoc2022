const input = Deno.readTextFileSync("./input.txt");

// Parse the input into an array of pairs of assignments
const pairs = input.split("\n").map((line) => line.split(","));

function intersection(setA: Set<unknown>, setB: Set<unknown>) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

let intersected = 0;

pairs.forEach((p) => {
  const elf1Sections = p[0].split("-").map((x) => +x);
  const elf2Sections = p[1].split("-").map((x) => +x);

  const elf1Set = new Set<number>();
  for (let i = elf1Sections[0]; i <= elf1Sections[1]; i++) {
    elf1Set.add(i);
  }
  const elf2Set = new Set<number>();
  for (let i = elf2Sections[0]; i <= elf2Sections[1]; i++) {
    elf2Set.add(i);
  }

  const i = intersection(elf1Set, elf2Set);

  if (i.size > 0) {
    intersected++;
  }
});

console.log({ intersected });
