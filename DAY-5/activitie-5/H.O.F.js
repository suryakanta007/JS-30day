let result = function (ans){
    console.log(ans);
}
function add(a,b,cb){
    let res = a+b;
    cb(res);
}
console.log(add(5,7,result));