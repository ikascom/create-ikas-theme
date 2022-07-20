#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

function shebang() {
  try {
    const filePath = path.join(process.cwd(), "build", "index.cjs");
    const fileBuffer = fs.readFileSync(filePath);
    const fileStr = fileBuffer.toString();
    const newFileStr = "#!/usr/bin/env node\n" + fileStr;

    fs.writeFileSync(filePath, newFileStr);
  } catch (err) {
    console.error(err);
  }
}

shebang();
