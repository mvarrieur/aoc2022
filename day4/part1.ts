async function run() {
  const input = await Deno.readTextFile("./input.txt");

  // Parse the input into an array of pairs of assignments
  const pairs = input.split("\n").map((line) => line.split(","));

  console.log({ pairs });

  // Initialize the counter variable
  let count = 0;

  // Iterate through the pairs of assignments
  for (const pair of pairs) {
    // Parse the assignments into arrays of start and end indices
    const [assignment1, assignment2] = pair.map((assignment) =>
      assignment.split("-").map((id) => parseInt(id, 10))
    );

    // Create a Set object to keep track of the sections assigned to each Elf
    const set = new Set();

    // Add the sections assigned to the first Elf to the Set object
    for (let i = assignment1[0]; i <= assignment1[1]; i++) {
      set.add(i);
    }

    // Check if the sections assigned to the second Elf are all contained
    // in the Set object. If they are, increment the counter variable.
    let allContained = true;
    for (let i = assignment2[0]; i <= assignment2[1]; i++) {
      if (!set.has(i)) {
        allContained = false;
        break;
      }
    }
    if (allContained) {
      count++;
    }

    // Clear the Set object and add the sections assigned to the second Elf
    set.clear();
    for (let i = assignment2[0]; i <= assignment2[1]; i++) {
      set.add(i);
    }

    // Check if the sections assigned to the first Elf are all contained
    // in the Set object. If they are, increment the counter variable.
    allContained = true;
    for (let i = assignment1[0]; i <= assignment1[1]; i++) {
      if (!set.has(i)) {
        allContained = false;
        break;
      }
    }
    if (allContained) {
      count++;
    }
  }

  // Output the result
  console.log({ count });
}

run();
