// tools/fetchImages.mjs  (works with any Node ≥18)
import fs from "node:fs/promises";

const json = await fs.readFile("src/data/news.json", "utf8");
const news = JSON.parse(json);

await fs.mkdir("public/img", { recursive: true });

for (const { id, image } of news) {
  const res = await fetch(image);
  const buf = await res.arrayBuffer();
  await fs.writeFile(`public/img/${id}.jpg`, Buffer.from(buf));
  console.log("saved", id);
}
