// Prints the Recruiter view page to public/cv.pdf so the CV always matches the site data.
// Usage: npm run build && npm run cv
// Needs a Chromium. Set CHROMIUM_PATH if it is not found automatically.
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync, mkdirSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright-core";

const root = join(process.cwd(), "out");
if (!existsSync(root)) {
  console.error('No "out" folder. Run "npm run build" first.');
  process.exit(1);
}

const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".json": "application/json", ".txt": "text/plain" };
const server = createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  let file = normalize(join(root, url));
  if (!file.startsWith(root)) return res.writeHead(403).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) return res.writeHead(404).end("Not found");
  res.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" }).end(readFileSync(file));
});

const candidates = [process.env.CHROMIUM_PATH, "/opt/pw-browsers/chromium", "/usr/bin/chromium", "/usr/bin/google-chrome"].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));

await new Promise((r) => server.listen(0, r));
const { port } = server.address();
const browser = await chromium.launch({ executablePath, args: ["--no-sandbox"] });
try {
  const page = await browser.newPage();
  await page.emulateMedia({ media: "print", reducedMotion: "reduce" });
  await page.goto(`http://localhost:${port}/career/recruiter-view/`, { waitUntil: "networkidle" });
  mkdirSync("public", { recursive: true });
  await page.pdf({ path: "public/cv.pdf", format: "A4", printBackground: true, margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" } });
  console.log("Wrote public/cv.pdf");
} finally {
  await browser.close();
  server.close();
}
