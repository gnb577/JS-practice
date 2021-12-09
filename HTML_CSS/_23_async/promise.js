'use strict'

// function fetchUser()
// {
//     return new Promise((resolve,reject)=>{
//         console.log('promise 실행')
//         resolve('제대로 실행 끝')
//     }) 
// }

// const a = fetchUser() //a는 promise

// //v는 제대로 실행 끝
// a
// .then((v)=>{
//     console.log(`fetchUser result: ${v}`)
// })




// async function fetchUser()
// {
//         console.log('promise 실행')
//       return '제대로 실행 끝'
// }

// const a = fetchUser() //a는 promise

// //v는 제대로 실행 끝
// a
// .then((v)=>{
//     console.log(`fetchUser result: ${v}`)
// })





// function B(){
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('B가 실행됨')
//             resolve(45)
//         },3000);
//     })
       
// }


// async function fetchUser(a)
// {
//         console.log('promise 실행')

//         k = B().then((v)=>{
            
//         })
//         if(a >= 0)
//         {
//             return '제대로 실행 끝'
//         }
//         else
//         {
//             throw new Error('음수')
//         }
      
// }

// const a = fetchUser(-10) //a는 promise

// //v는 제대로 실행 끝
// a
// .then((v)=>{
//     console.log(`fetchUser result: ${v}`)
// })
// .catch((error)=>{
//     console.log(`에러발생 : ${error}`)
// })
// .finally(()=>{ //resolve, reject에 상관없이 promise종료시 실행되는 부분
//     console.log('promise 끝 finally')

// })


function B(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('B가 실행됨')
            resolve(45)
        },3000);
    })
       
}


async function fetchUser(a)
{
        console.log('promise 실행')

        const k = await B() //비동기화의 시간 어긋남을 방지
        //await은 async 내에서만 다른 promise의 종료를 기다릴 때 사용
        if(k >= 0)
        {
            return '제대로 실행 끝'
        }
        else
        {
            throw new Error('음수')
        }
       
       
      
}

const a = fetchUser(-10) //a는 promise

//v는 제대로 실행 끝
a
.then((v)=>{
    console.log(`fetchUser result: ${v}`)
})
.catch((error)=>{
    console.log(`에러발생 : ${error}`)
})
.finally(()=>{ //resolve, reject에 상관없이 promise종료시 실행되는 부분
    console.log('promise 끝 finally')

})