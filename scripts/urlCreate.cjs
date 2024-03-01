const url = require('node:url');

//WHATWG API
const myUrl = new URL('https://user:pass@example.com:8080/')
console.log(myUrl)

//traditional API
const traditionalUrl = url.parse('https://user:pass@example.com:8080/')
console.log(traditionalUrl)


const createUrl = new URL('https://example.org');
console.log(createUrl);


const urlParts = {
  pathname: '/a/b/c',
  search: '?d=a',
  hash: '#fgh'
}

const { pathname, search, hash } = urlParts;

createUrl.pathname = pathname;
createUrl.search = search;
createUrl.hash = hash;

console.log(createUrl)
console.log(createUrl.href)
console.log(Object.getOwnPropertyNames(createUrl))
