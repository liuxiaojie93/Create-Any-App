const fs = require("fs");
module.exports = function emptyPathDeep(path){
    const state =  fs.statSync(path);
    if(!state.isDirectory()){
        fs.unlinkSync(path);
        return;
    }else{
        const files = fs.readdirSync(path) || [];
        if(files.length===0){
            fs.rmdirSync(path);
        }else{
            files.forEach(file=>{
                var curPath = path + "/" + file;
                emptyPathDeep(curPath)
            })
        }
        
    };
    fs.rmdirSync(path);
}