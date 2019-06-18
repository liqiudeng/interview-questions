function sumpositive(arr1){
    var sum;
    for (var i=0;i<arr1.length; i++)
    if (arr1[i]>0)
    sum+= arr1[i];
};
var arr1=[1,-4,7,12];
console.log(sumpositive(arr1));