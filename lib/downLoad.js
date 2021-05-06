const download = require('download-git-repo');
const chalk = require("chalk");
const framesMaps = {
    "React":"github:liuxiaojie93/react-demo",
    "Vue":"github:liuxiaojie93/react-demo",
    "Webpack":"github:liuxiaojie93/webpack"
}
module.exports = (targetDir,Frame)=>{
    console.log("downLoads",targetDir,Frame);
    download(`${framesMaps[Frame]}`,targetDir,function(err){
        console.log(err);
    })
}