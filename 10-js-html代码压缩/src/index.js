
const add = (x,y)=>{
    return x+y
}

const promise = new Promise((resolve)=>{
    setTimeout(() => {
        console.log('promise成功执行了')
    }, 1000);
})


console.log(add(3,5))
console.log(promise)