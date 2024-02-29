import { readFileSync, readFile } from 'node:fs'
import { writeFile } from 'node:fs/promises'
//import { readFile } from 'node:fs/promises'

const srcFile = readFileSync('./template.html', 'utf8')
console.log(srcFile)


const html = srcFile.replace('<!--replace-->', 'repalace!')

console.log(html)

writeFile('./dist.html', html)

readFile('./template.html','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  const html = data.replace('<!--replace-->', 'Replace!!');
  console.log(html)
  writeFile('./dist.html', html )
})
/*
async function check() {
  const distHtml =  await readFile('./dist.html', 'utf8')
  console.log(distHtml)
}

check()
*/
