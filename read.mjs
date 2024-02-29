import { readFileSync } from 'node:fs'
import { writeFile } from 'node:fs/promises'
import { readFile } from 'node:fs/promises'

const srcFile = readFileSync('./src.html', 'utf8')
console.log(srcFile)


const html = srcFile.replace('<!--replace-->', 'repalace!')

console.log(html)

writeFile('./dist.html', html)

async function check() {
  const distHtml =  await readFile('./dist.html', 'utf8')
  console.log(distHtml)
}

check()
