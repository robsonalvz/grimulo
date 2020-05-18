#! /usr/bin/env node
let shell = require('shelljs')
let fs = require('fs') //fs already comes included with node.
let templates = require('./templates/templates.js')

let appName = process.argv[2]
let moduleName = process.argv[3]
let packageName = process.argv[4]
let appDirectory = `${process.cwd()}/${appName}`


const createReactApp = () => {
  return new Promise(resolve=>{
    if(appName){
      shell.exec(`create-react-app ${appName}`, () => {
        console.log('Created react app')
        resolve(true)
      })
    }else{
      console.log('\nNo app name was provided.'.red)
      console.log('\nProvide an app name in the following format: ')
      console.log('\ncreate-react-redux-router-app ', 'app-name\n'.cyan)
        resolve(false)
    }
  })
}
const cdIntoNewApp = () => {
  return new Promise(resolve=>{
    //shell.exec(`mkdir ${appDirectory}/src/main/java/${moduleName}`, () => {resolve()})
    shell.exec(`cd ${appName}`, ()=>{resolve()})
  })
}
const installPackages = () => {
  return new Promise(resolve=>{
    console.log('\nInstalling redux, react-router, react-router-dom, react-redux, and redux-thunk\n'.cyan)
    shell.exec(`yarn add redux react-router react-redux redux-actions react-router-dom`, () => {
      console.log('\nFinished installing packages\n'.green)
      resolve()
    })
  })
}
const updateTemplates = () => {
  return new Promise(resolve=>{
    let promises = []
    Object.keys(templates).forEach((fileName, i)=>{
      promises[i] = new Promise(res=>{
        fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], function(err) {
            if(err) { return console.log(err) }
            res()
        })
      })
    })
    Promise.all(promises).then(()=>{resolve()})
  })
}

const run = async () => {
  let success = await createReactApp()
  if(!success){
    console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
    return false;
  }
  await cdIntoNewApp()
  await installPackages()
  //await updateStringTemplates();
  console.log('All done')
}
run() 