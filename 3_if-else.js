//single if
var learning = 1;
if(learning == true){
    console.log("Hello world, I am learning JavaScript.");
}


//if-else
var age = 20;
if(age>21){
    console.log("You are eligible for wedding");
}
else{
    console.log("You are not eligible for wedding");
}

//if-else Ladder
var a=24, b=24, c=24;
if (a>b && a >c){
    console.log("A is gearter number then other");
}
else if (b>a && b>c){
    console.log("B is greater number then other");    
}
else if (a==b && a != c && b!=c){
    console.log("A and B are equal")
}
else if (b==c && b!=a && c!=a){
    console.log("B and C are equal")
}
else if (a==b && b==c){
    console.log("A, B and C are equal")
}
else{
    console.log("C is greater number then other");
}









