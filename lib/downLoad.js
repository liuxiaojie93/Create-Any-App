const download = require('download-git-repo');
const chalk = require("chalk");
const framesMaps = {
    "React":"github:liuxiaojie93/react-demo",
    "Vue":"github:liuxiaojie93/react-demo",
    "Webpack":"github:liuxiaojie93/webpack"
}
module.exports = (targetDir,whichFrame)=>{
    console.log("downLoad",targetDir,whichFrame);
    download(`github:liuxiaojie93/${framesMaps[whichFrame]}`,targetDir,function(err){
        console.log(err);
    })
}