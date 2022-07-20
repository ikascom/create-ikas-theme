"use strict";
exports.__esModule = true;
exports.success = exports.greeting = exports.line = exports.logo = void 0;
exports.logo = "\n     \u2593\u2591          \u2593\u2593   \u2593\u2593                          \n   \u2593\u2593\u2593\u2591               \u2593\u2593                          \n  \u2591\u2593\u2593\u2593\u2591          \u2593\u2593   \u2593\u2593   \u2593\u2593    \u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593  \u2593\u2593\u2593\u2593\u2593\u2593 \n\u2592\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2592    \u2593\u2593   \u2593\u2593  \u2593\u2593    \u2593\u2593     \u2593\u2593  \u2593\u2593\u2593    \n      \u2591\u2593\u2593\u2593       \u2593\u2593   \u2593\u2593\u2593\u2593\u2593\u2593\u2593   \u2593\u2593     \u2593\u2593      \u2593\u2593\u2593\n      \u2591\u2593\u2593        \u2593\u2593   \u2593\u2593\u2593   \u2593\u2593   \u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593  \u2593\u2593\u2593\u2593\u2593\u2593 \n";
exports.line = "\n------------------------\u26A1\uFE0F-------------------------\n";
function greeting() {
    console.log(exports.logo);
    console.log(exports.line);
}
exports.greeting = greeting;
function success(_a) {
    var folderName = _a.folderName;
    console.log("\nInside that directory, you can run several commands:\n\n\u001B[36mnpm run dev\u001B[0m\n  Starts the development server.\n\n\u001B[36mnpm run build\u001B[0m\n  Bundles the app into static files for production.\n\nWe suggest that you begin by typing:\n\n\u001B[36mcd " + folderName + "\nnpm install\u001B[0m\n\nHappy coding \u26A1\uFE0F");
}
exports.success = success;
