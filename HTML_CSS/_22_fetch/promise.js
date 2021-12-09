'use strict'

//a = promise, fetch의 return값은 promise
const a = fetch('http://127.0.0.1:5500/_1_hello_world/hello.html')

//fetch가 resolve되면, then단계로 (fetch 성공)
a
.then((response)=>{
    console.log(`서버 응답 : ${response}`)
    //console.log(`응답을 텍스트로 바꾸면 : ${response.text()}`) // 반환값이 문자열이 아님!!--> console.log로 출력안댐
    return response.text() // 또 다른 promise를 반환

})
.then((data)=>{
    console.log(`문자열로 바꾼 응답: ${data}`)
})
.catch((err)=>{
    console.log(`서버 응답 에러: ${err}`)
})


for(let i=0;i<10;i++)
{
    console.log(i)
}

// //비동기식
// let request = new XMLHttpRequest() 

// request.onload =()=>{
//     if(request.status === 200)
//     {
//         console.log('응답이 제대로왔음'+request.responseText)
//     }
//     else{
//         console.log('응답이 제대로 오지 않음...')
//     }
// }
// request.open('GET','http://127.0.0.1:5500/_1_hello_world/hello.html',true) //true false는 동기식,비동기식의 여부 true가 비동기
// request.send(null)

// for(let i=0;i<10;i++)
// {
//     console.log(i);
// }

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