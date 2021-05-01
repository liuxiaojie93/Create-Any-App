#!/usr/bin/env node
const { Command } = require("commander");
const fs = require("fs");
const path = require("path");
const rmFilesDeep = require("./emptyPathDeep");
const inquirer = require("inquirer");
const downLoad = require("./downLoad")
async function create(projectName,options){
    const cwd = process.cwd();
    const targetDir = path.resolve(cwd, projectName || ".");
    if (fs.existsSync(targetDir)) {
      if (options.force) {
        rmFilesDeep(targetDir);
        downLoad(targetDir)
      }else{
      //  const res =  await inquirer.prompt({
      //    type:"list",
      //   name:"value",
      //    message:`${projectName} 文件已存在，请选择：`,
      //    choices:[
      //      {name:"覆盖",value:true},
      //      { name:"取消",value:false}
      //    ]
      //  })
       if(true){
        rmFilesDeep(targetDir);
        downLoad(targetDir)
       }
        console.log("res",res);
      }
    }
   
}

module.exports = create