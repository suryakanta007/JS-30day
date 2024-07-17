let sqar = function (num){
    return num*num;
}
let power = function (num){
    return Math.pow(num,2);
}
function higherOrderFun(fun1,fun2,input){
    let result = fun1(input);
    return fun2(result);
}

console.log(higherOrderFun(sqar,power,4));