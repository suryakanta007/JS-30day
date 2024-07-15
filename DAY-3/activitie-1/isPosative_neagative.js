function isPositive(num){
    if(num>0){
        return "Positive"
    }else if(num<0){
        return "Negative"
    }else{
        return 0;
    }
}
console.log(isPositive(-34));