// One Word From Grandma — the single word a grandma would text about AI.
// The program writes exactly that word to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "thingamajig";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// One word only: trim any stray whitespace and cap at 30 characters.
const text = WORD.trim().slice(0, 30);
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
console.log(`Wrote "${text}" (${text.length} characters) to ${outDir}/entry.txt`);
