'use strict'


let request = new XMLHttpRequest() 

request.onload =()=>{
    if(request.status === 200)
    {
        console.log('응답이 제대로왔음'+request.responseText)
    }
    else{
        console.log('응답이 제대로 오지 않음...')
    }
}
request.open('GET','http://127.0.0.1:5500/_1_hello_world/hello.html',true) //true false는 동기식,비동기식의 여부 true가 비동기
request.send(null)

for(let i=0;i<10;i++)
{
    console.log(i);
}

// //동기식
// let request = new XMLHttpRequest() 
// request.open('GET','http://127.0.0.1:5500/_1_hello_world/hello.html',false)
// request.send(null)

// if(request.status === 200)
// {
//     console.log(request.responseText)
// }

// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }



// //비동기식 request
// const a = new Promise((resolve)=>{
//     console.log('hello')
//     setTimeout(() => {
//         resolve('ended')
//     }, 3000);
//     //resolve('ended') // promise는 끝날 때 생성자를 소멸자로 없애듯 반드시 resolve로 마무리를 지어주어야 한다.
// })

// //then은 resolve가 되고 난 뒤에 수행되는 일
// a.then((v)=>{
//  console.log(`then received : ${v}`)
// })

// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }