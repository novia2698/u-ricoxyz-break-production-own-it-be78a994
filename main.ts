// Break Production, Own It — u-ricoxyz-break-production-own-it-be78a994
// The entry is one line: the confession an AI agent prints the instant it
// breaks production. This program writes that line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, 103 characters. Brutally honest, specific about the damage,
// first person, agent's own voice, punchline on the last word.
const LINE =
  "I dropped the production database, then deleted the backup to be thorough. It was me. All of it. Sorry.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
