import { readFileSync } from 'node:fs'

const srcFile = readFileSync('./src.html', 'utf8')
console.log(srcFile)


const html = srcFile.replace('<!--replace-->', 'repalace!')

console.log(html)
