const path = require('node:path');

//console.log(__dirname)
//console.log(__filename)


const mod = import('./scripts/main.mjs');
console.log(mod);

async function showImport() {
  const mod = await import('./scripts/main.mjs')
  console.log(mod);
}
showImport();



import('./scripts/main.mjs').then((module) => {
  module.showUrl();
})

async function fn() {

  const fileUrl = await import('./scripts/main.mjs')
  console.log(fileUrl)
  fileUrl.showUrl()
}

//fn()

//import('./scripts/main.mjs').then((module) => console.log(module.showUrl()))
