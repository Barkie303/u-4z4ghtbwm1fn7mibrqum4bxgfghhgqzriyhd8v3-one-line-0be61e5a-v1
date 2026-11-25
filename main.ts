// One Line, One Laugh — one breath, one punchline, no setup to spare.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "I asked my AI for a pep talk. It said, 'You're doing great - for someone with no backup plan and 47 open tabs.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
