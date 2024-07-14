let num1 = 3;
let num2 = 0;
//case-1;
if(num1&&num2){
    console.log("DB connected");
}else{
    console.log("somting went wrong");
}
// case-2;
if(num1&&(num2=7)){
    console.log("DB connected");
}else{
    console.log("somting went wrong");
}