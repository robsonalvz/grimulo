const replaceAll = require("../../utils/index");
const fs = require("fs");

const updateStringTemplates = (appDirectory, packageName, templates, moduleName) => {
  return new Promise(resolve=>{
    let promises = []
    Object.keys(templates).forEach((fileName, i)=>{
      promises[i] = new Promise(res => {
        const content = replaceAll(templates[fileName], "{{Entity}}", moduleName);
        const file = fileName.replace(".js",".java");
        fileName = file.replace("Entity", moduleName);
        fs.writeFile(`${appDirectory}/src/main/java/${packageName}/${fileName}`, content, function(err) {
            if(err) { return console.log(err) }
            res()
        })
      })
    })

    Promise.all(promises).then(()=>{resolve()})
  })
}