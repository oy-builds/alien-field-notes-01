import { mkdirSync, writeFileSync } from "node:fs";

// One-line alien tourist review of Earth.
// Field observation: every human outdoors is chaperoned by a small wolf
// that decides where they walk, while the human trails behind and collects
// the wolf's waste by hand, in a bag. Two days in, the hierarchy is unclear.
const review =
  "4/5: Lovely planet, but every human is chaperoned by a tiny wolf who picks the route and makes them collect its waste by hand, in a bag. Still unclear which species is domesticated.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
