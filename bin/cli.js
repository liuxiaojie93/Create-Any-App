#!/usr/bin/env node
const { Command } = require("commander");
const path = require("path");
const program = new Command();
const chalk = require("chalk");
const { validateProjectName } = require("../lib/validateProjectName");
const create = require("../lib/create")
program
  .command("create <projectName>")
  .alias("ck")
  .option("-f, --force", "rm folder force")
  .action(async function (projectName, cmd) {
    // TODO 校验projectName
    
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
    create(projectName,cmd)
  });

  program.version("0.0.1", "-v,--version").parse(process.argv);
