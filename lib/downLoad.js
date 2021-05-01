const download = require('download-git-repo');
const chalk = require("chalk");
module.exports = (targetDir)=>{
    download("github:liuxiaojie93/webpack",targetDir,function(err){
        console.log(err);
    })
}