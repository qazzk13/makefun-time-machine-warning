process.umask(0o022);
// Funniest Time Machine Warning Label
// make.fun competition u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
//
// Writes one warning label (120 characters max) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Same line every run. No network, no input, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: Do not meet your younger self. He will ask for lottery numbers, rent money, and why you kept that haircut.";

const MAX_CHARS = 120;

function main(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`label is ${LINE.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("label must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(LINE);
}

main();
