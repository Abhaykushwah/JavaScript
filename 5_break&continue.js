var arr = [1,2,3,'ab','iam',45,6,7,]
for(var i=0;i<arr.length;i++){
    if(arr[i]==4){
        continue;
    }
    console.log(arr[i]);
}