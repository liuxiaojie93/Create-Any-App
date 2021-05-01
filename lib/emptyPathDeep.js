const fs = require("fs");
module.exports = function(path){
    if(fs.stats.isDirectory(path)){
       const files =  fs.readdirSync(path);
       console.log(files,"files");
    }

}