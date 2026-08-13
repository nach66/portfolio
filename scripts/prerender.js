const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const http = require("http");

const buildDir = path.join(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");

const routes = [
  "/",
  "/about",
  "/privacy",
  "/portfolio",
  "/systems",
  "/development-services",
  "/contact",
  "/blog",
  "/blog/woocommerce-add-product",
  "/blog/website-types",
  "/blog/woocommerce-shipping",
];

const originalIndexHtml = fs.readFileSync(indexPath, "utf8");

const mimeTypes = {
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const requestUrl = new URL(req.url, "http://localhost");
      const pathname = decodeURIComponent(requestUrl.pathname);

      const requestedFile = path.join(buildDir, pathname);
      const extension = path.extname(pathname);

      if (
        extension &&
        fs.existsSync(requestedFile) &&
        fs.statSync(requestedFile).isFile()
      ) {
        res.writeHead(200, {
          "Content-Type": mimeTypes[extension] || "application/octet-stream",
        });

        fs.createReadStream(requestedFile).pipe(res);
        return;
      }

      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
      });

      res.end(originalIndexHtml);
    });

    server.listen(4173, "127.0.0.1", () => {
      resolve(server);
    });
  });
}

async function prerender() {
  const server = await startServer();

  const browser = await puppeteer.launch({
    headless: true,
  });

  try {
    for (const route of routes) {
      const page = await browser.newPage();

      console.log(`Prerendering ${route}`);

      await page.goto(`http://127.0.0.1:4173${route}`, {
        waitUntil: "domcontentloaded",
      });

      await page.waitForFunction(() => {
        const root = document.getElementById("root");
        return root && root.children.length > 0;
      });

      await page.waitForSelector(
        'meta[name="seo-prerender-ready"]'
      );

      await page.evaluate(() => {
        document
          .querySelectorAll(
            'script[src*="connect.facebook.net"]'
          )
          .forEach((script) => script.remove());
      });

      const html = await page.content();

      const outputDirectory =
        route === "/"
          ? buildDir
          : path.join(
              buildDir,
              route.replace(/^\/|\/$/g, "")
            );

      fs.mkdirSync(outputDirectory, {
        recursive: true,
      });

      fs.writeFileSync(
        path.join(outputDirectory, "index.html"),
        html,
        "utf8"
      );

      await page.close();

      console.log(`✓ ${route}`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log("Prerender complete.");
}

prerender().catch((error) => {
  console.error(error);
  process.exit(1);
});