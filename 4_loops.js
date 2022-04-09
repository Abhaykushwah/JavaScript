// for loop

var arr = [1,2,'4','5',6,7,9,2,6];
len = arr.length;
/*
for(var i = 0; i<len;i++){
    console.log(arr[i]);
}
*/

//forEach loop
/*
arr.forEach(function(elementsOFarr){
    console.log(elementsOFarr);
})
*/

//while loop
let j = 0;
// while(j<len){
//     console.log(arr[j]);
//     j++;
// }


//do while loop
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length);


