let isHaveSpace = (str)=>{
    for (const char of str) {
        if(char===" "){
            return true;
        }
    }
    return false;
}
console.log(isHaveSpace("surya sing"));