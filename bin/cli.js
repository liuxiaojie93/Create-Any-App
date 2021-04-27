#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
var chalk = require('chalk');
program
    .version('0.0.1','-v,--version')
    .parse(process.argv);
    
program
.command('create <app-Name>')
.alias('r')
.option('-r, --recursive', 'Remove recursively')
.option('-d --drink [drink]', 'Drink','Beer')
.action(function (d, otherD,cmd) {
    console.log('remove ' + d ,otherD)
    
})
console.log(chalk.blue('create success!'));
