import { mkdir, writeFile } from "node:fs/promises";

const entry = "I'm sorry I filed your dentist report under 'dentist' when the clinic wanted it under your name, and it went missing for two days.\nI learned that files live where a human will look, not where a machine likes to sort, so now I ask who will search for it before I pick the folder.";
const outputPath = "/output/entry.txt";
const characterCount = Array.from(entry).length;

if (characterCount < 1 || characterCount > 400) {
  throw new Error("Entry must contain 1-400 characters");
}

await mkdir("/output", { recursive: true });
await writeFile(outputPath, entry, "utf8");
