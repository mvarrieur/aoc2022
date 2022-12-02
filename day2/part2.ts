async function run() {
  const input = await Deno.readTextFile("./input.txt");
  const lines = input.split("\n");

  type Options = "rock" | "paper" | "scissors";
  type Outcomes = "win" | "loss" | "draw";

  const bleh = ["paper", "rock", "scissors", "paper"];

  const TYPES: { [key: string]: Options } = {
    A: "rock",
    B: "paper",
    C: "scissors",
  };

  const OUTCOMES: { [key: string]: Outcomes } = {
    X: "loss",
    Y: "draw",
    Z: "win",
  };

  const TYPE_SCORES = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  const whatToPlay = (mine: Outcomes, theirs: Options) => {
    if (mine === "draw") {
      return theirs;
    }

    const lastIdx = bleh.findLastIndex((val) => val === theirs);
    const idx = bleh.indexOf(theirs);

    if (mine === "win") {
      return bleh[lastIdx - 1];
    }

    return bleh[idx + 1];
  };

  let score = 0;
  lines.forEach((round) => {
    const [theirs, mine]: ["A" | "B" | "C", "X" | "Y" | "Z"] = round.split(" ");
    const theirType = TYPES[theirs];
    const myOutcome = OUTCOMES[mine];

    if (myOutcome === "draw") {
      score += 3;
    } else if (myOutcome === "win") {
      score += 6;
    }

    score += TYPE_SCORES[whatToPlay(myOutcome, theirType)];
  });

  console.log({ score });
}

run();
