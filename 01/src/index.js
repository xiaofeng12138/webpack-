
/*
   开发环境打包   webpack ./src/index.js -o ./build/built.js --mode=development

   生产环境打包   webpack ./src/index.js -o ./build/built.js --mode=production
 
**/
import data from './data.json'

console.log(data)


function add(x,y){
    return (x+y)
}

console.log(add(1,2))