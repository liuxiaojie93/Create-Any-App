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
    const {Frame} =  await inquirer.prompt({
      type:"list",
      name:"Frame",
      message:`请选择前端框架：`,
      choices:[
        {name:"React",value:"React"},
        { name:"Vue",value:"Vue"},
        { name:"Webpack",value:"Webpack"}
      ]
    });
    console.log("select Frame：",Frame);
    if (fs.existsSync(targetDir)) {
      if (options.force) {
        rmFilesDeep(targetDir);
        downLoad(targetDir,Frame)
      }else{
        const res =  await inquirer.prompt({
          type:"list",
          name:"value",
          message:`${projectName} 文件已存在，请选择：`,
          choices:[
            {name:"覆盖",value:true},
            { name:"取消",value:false}
          ]
        })
        if(res){
          console.log("res",res);
          rmFilesDeep(targetDir);
          downLoad(targetDir,Frame)
        }
      }
    }else{
      downLoad(targetDir,Frame)
    }
}

module.exports = create