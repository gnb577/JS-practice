// setInterval(()=>{
//     console.log('Node js 연습중')

const { showLogMessage } = require("./logger");

// },3000)



// console.log('hello, node js') // ctrl + `(backtic)

// function sayHello(name)
// {
//     console.log('Hello '+ name +(101+10))
// }
// sayHello('jOHN')
// sayHello('Alice')

// const v = 10

// if(v > 5){
//     console.log('It is a big number')
// }
// else
// {
//     console.log('It is a small number')
// }



//logger.js module showlogmessage불러다쓰기
const logger = require('./logger.js')
logger.showLogMessage('모듈에 대한 테스트 중...')
logger.secondlog('2번째 모듈 대한 테스트 중...')
console.log('logger모듈변수 :'+logger.pvalue)