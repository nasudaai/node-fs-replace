import { fileURLToPath }  from 'node:url';
import { URL } from 'node:url';
import path from 'node:path';

const basename = path.basename('/app/script/main.js');
//console.log(basename);


const __filename = fileURLToPath(import.meta.url);

//console.log(__filename);

function showUrl() {
  const databaseUrl = new URL('../db/data.db',import.meta.url )
  console.log(databaseUrl)
  console.log(databaseUrl.pathname);                           
}

console.log('module')
export {showUrl};



