async function run() {
  const input = await Deno.readTextFile("./input.txt");
  const lines = input.split("\n");

  type Options = "rock" | "paper" | "scissors";

  const TYPES: { [key: string]: Options } = {
    A: "rock",
    X: "rock",
    B: "paper",
    Y: "paper",
    C: "scissors",
    Z: "scissors",
  };

  const TYPE_SCORES = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  const OUTCOME_SCORES = {
    loss: 0,
    draw: 3,
    win: 6,
  };

  const isWin = (mine: Options, theirs: Options) => {
    if (
      (mine === "rock" && theirs === "scissors") ||
      (mine === "paper" && theirs === "rock") ||
      (mine === "scissors" && theirs === "paper")
    ) {
      return true;
    }

    return false;
  };

  let score = 0;
  lines.forEach((round) => {
    const [theirs, mine]: ["A" | "B" | "C", "X" | "Y" | "Z"] = round.split(" ");
    const theirType = TYPES[theirs];
    const myType = TYPES[mine];

    if (theirType === myType) {
      score += 3;
    } else if (isWin(myType, theirType)) {
      score += 6;
    }

    score += TYPE_SCORES[myType];
  });

  console.log({ score });
}

run();
