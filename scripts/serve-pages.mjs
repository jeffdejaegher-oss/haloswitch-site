import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(fileURLToPath(new URL("../out", import.meta.url)));
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "/haloswitch-site").replace(
  /\/$/,
  "",
);
const port = Number(process.env.PORT) || 4173;

const TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

function safeJoin(root, urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0] ?? "");
  const abs = resolve(root, `.${decoded}`);
  const rel = relative(root, abs);
  if (rel.startsWith("..") || rel.startsWith(sep)) {
    return null;
  }
  return abs;
}

async function fileResponse(path) {
  try {
    const info = await stat(path);
    if (info.isDirectory()) {
      return fileResponse(join(path, "index.html"));
    }
    return {
      body: await readFile(path),
      type: TYPES[extname(path)] ?? "application/octet-stream",
    };
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const url = req.url ?? "/";

  if (url === "/" || url === "") {
    res.writeHead(302, { Location: `${basePath}/` });
    res.end();
    return;
  }

  if (url !== basePath && !url.startsWith(`${basePath}/`)) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end(`Not found. This export is served at ${basePath}/\n`);
    return;
  }

  const rest = url === basePath ? "/" : url.slice(basePath.length);
  const target = safeJoin(outDir, rest);
  const result = target ? await fileResponse(target) : null;

  if (!result) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found\n");
    return;
  }

  res.writeHead(200, { "content-type": result.type });
  res.end(result.body);
}).listen(port, () => {
  console.log(`Pages preview at http://127.0.0.1:${port}${basePath}/`);
});
