#!/usr/bin/env node
const { Command } = require("commander");
const fs = require("fs");
const path = require("path");
const program = new Command();
const chalk = require("chalk");
const { validateProjectName } = require("./utils/validateProjectName");
const download = require('download-git-repo');

program
  .command("create <projectName>")
  .alias("ck")
  .option("-r, --recursive", "Remove recursively")
  .option("-d --drink [drink]", "Drink", "Beer")
  .action(async function (projectName, cmd) {
    // TODO 校验projectName
    const cwd = process.cwd();
    const targetDir = path.resolve(cwd, projectName || ".");
    const result = validateProjectName(projectName);
    if (!result.validForNewPackages) {
      console.error(chalk.red(`Invalid project name: "${name}"`));
      result.errors &&
        result.errors.forEach((err) => {
          console.error(chalk.red.dim("Error: " + err));
        });
      result.warnings &&
        result.warnings.forEach((warn) => {
          console.error(chalk.red.dim("Warning: " + warn));
        });
      exit(1);
    }

    // if (fs.existsSync(targetDir) && !options.merge) {
    //   if (options.force) {
    //     await fs.remove(targetDir);
    //   } else {
    //     fs.mkdirSync(`${process.cwd()}/${projectName}`);
    //   }
    // } else {
    //   fs.mkdirSync(`${process.cwd()}/${projectName}`);
    // }
    // if (fs.existsSync(targetDir)){
    //     fs.rmdirSync(targetDir);
    // }
    fs.mkdirSync(`${process.cwd()}/${projectName}`);
    console.log();
    download("github:liuxiaojie93/react-demo",targetDir,function(err){
       console.log(err?err:chalk.blue("create success!"));
    })
  });

  program.version("0.0.1", "-v,--version").parse(process.argv);
