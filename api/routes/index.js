const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

let routes = fs.readdirSync(__dirname);

for (let file of routes) {
  if (file.endsWith(".js") && file !== "index.js") {
    const routePath = path.join(__dirname, file);
    const routeModule = require(routePath);

    // 🔒 middleware olup olmadığını kontrol et
    if (
      typeof routeModule === "function" ||
      (typeof routeModule === "object" &&
        typeof routeModule.handle === "function")
    ) {
      router.use("/" + file.replace(".js", ""), routeModule);
      console.log(`✓ Yüklendi: /${file.replace(".js", "")}`);
    } else {
      console.warn(`⚠️ Atlandı: ${file} geçerli bir router değil.`);
    }
  }
}

module.exports = router;
