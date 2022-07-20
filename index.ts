import path from "path";
import fs from "fs";
import inquirer from "inquirer";

import { greeting, success } from "./helpers/log";
import { copyRecursiveSync } from "./helpers/copyRecursiveSync";

async function run() {
  greeting();
  let themeFolderName: string | undefined;

  const questions: any = [
    {
      type: "input",
      name: "folderName",
      message: "What's the project folder name?",
      default: () => "ikas-theme",
      validate(folderName: string) {
        if (fs.existsSync(folderName)) {
          return `Folder already exists: ${folderName}.\nPlease enter different name which does not exist.`;
        }

        return true;
      },
    },
  ];

  const answers = await inquirer.prompt(questions);
  themeFolderName = answers.folderName;
  if (!themeFolderName) return;
  fs.mkdirSync(themeFolderName);
  // process.chdir(`${process.cwd()}/${themeFolderName}`);

  const destination = path.resolve(themeFolderName);
  copyRecursiveSync(
    path.join(__dirname, "templates", "typescript"),
    destination
  );
  success({ folderName: themeFolderName });
}

run();
