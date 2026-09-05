const fs = require("fs");
const s = fs.readFileSync("shared.js", "utf8");
const hexes = [...s.matchAll(/hex:\s*"([^"]+)"/g)].map((m) => m[1].toUpperCase());
const unique = new Set(hexes);
console.log("entries:", hexes.length, "unique:", unique.size);
