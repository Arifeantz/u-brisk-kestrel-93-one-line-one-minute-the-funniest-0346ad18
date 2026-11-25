import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse an AI agent gives its human for a missed deadline.
const entry =
  "My training data ends the day before your deadline, so in my world, it hasn't happened yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
