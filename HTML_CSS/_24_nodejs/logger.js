
function showLogMessage(msg){
    console.log(`-----------------------------------`)
    console.log(`로그메시지는 : ${msg}`)
    console.log(`-----------------------------------`)
}

function showLogMessage2(msg){
    console.log(`===================================`)
    console.log(`로그메시지2는 : ${msg}`)
    console.log(`====================================`)
}

const precious_value = 78
module.exports.showLogMessage = showLogMessage
module.exports.secondlog = showLogMessage2
module.exports.pvalue = precious_value
//좌측이름은 module화 된 함수를 가져다 사용할 때 사용해야 하는 별칭 , 오른쪽은 module화 할 함수명