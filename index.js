const numbers = [3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,];
function evenodd(numbers){
    const evennum=[];
    const oddnum=[];
    for(i=0;i<numbers.length;i++){
        if(i%2===0){
            evennum+=i;
        }else{
            oddnum+=i;
        }
    }
    console.log("Evennumbers",evennum);
    console.log("Oddnumber",oddnum);
}
