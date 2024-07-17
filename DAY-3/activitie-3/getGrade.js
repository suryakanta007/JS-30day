let mark = 95;
switch(true){
    case (mark<=29):{
        console.log("Faill");
        break;
    }
    case (mark>=30&&mark<=49):{
        console.log("grade-e,Pass");
        break;
    }
    case (mark>=50&&mark<=59):{
        console.log("Gread : d");
        break;
    }
    case (mark>=60&&mark<=69):{
        console.log("gread : c");
        break;
    }
    case (mark>=70&&mark<=84):{
        console.log("Gread :b");
        break;
    }
    case (mark>=85&&mark<=100):{
        console.log("Gread :A");
        break;
    }
    default:{
        console.log("Invalid Mark");
        break;
    }
    
}