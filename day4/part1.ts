const input = Deno.readTextFileSync("./input.txt");

// Parse the input into an array of pairs of assignments
const pairs = input.split("\n").map((line) => line.split(","));

function difference(setA: Set<number>, setB: Set<number>) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

let fullyContained = 0;

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

  const d1 = difference(elf1Set, elf2Set);
  const d2 = difference(elf2Set, elf1Set);

  if (d1.size === 0) {
    fullyContained++;
  }
  if (d2.size === 0) {
    fullyContained++;
  }
  if (d1.size === 0 && d2.size === 0) {
    fullyContained--;
  }
});

console.log({ fullyContained });
