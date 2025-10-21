const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const https = require("https");

function decode(b64) {
  return Buffer.from(b64, "base64").toString("utf-8");
}

async function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, res => {
      if (res.statusCode !== 200)
        return reject(new Error(`Image fetch failed with status: ${res.statusCode}`));
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", err => {
      fs.unlink(filePath, () => reject(err));
    });
  });
}

const encodedUrl = "aHR0cHM6Ly9yYXNpbi1hcGlzLm9ucmVuZGVyLmNvbQ==";
const encodedKey = "cnNfaGVpNTJjbTgtbzRvai11Y2ZjLTR2N2MtZzE=";

module.exports = {
  config: {
    name: "needgf",
    version: "3.0.1",
    author: "Mehedi Hassan",
    countDown: 10,
    role: 0,
    shortDescription: "তোর Gf এর প্রোফাইল পিক দেখায় 😍",
    longDescription: "সিঙ্গেলদের জন্য বিশেষ কমান্ড 💔 প্রতি বার নতুন সুন্দরী মেয়ের প্রোফাইল 😚",
    category: "fun",
