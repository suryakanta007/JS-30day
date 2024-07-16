let row ;
for(let i = 1;i<=5;i++){
    row = ""
    for(let j = 1;j<=5;j++){
        if(j>i){
            continue;
        }
        row+= "\t*";
    }
    console.log(row+"\n");
}