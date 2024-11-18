const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];


  const isPrime =(num)=>{
    if(num<=1)return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0)return false;
    }
    return true;
  };
  const primeArray = numners.filters(isPrime);


  //find the maximum ,minimum and the sum of the prime numbers
  const maxPrime=Math.max(...primeArray);
  const minPrime=Math.min(...primeArray);
  const sumPrime=primeArray.reduce((acc,num)=>acc+num,0);


  console.log("Prime numbers",primeArray);
  console.log("Max Prime",maxPrime);
  console.log("Mininum Prime",minPrime);
  console.log("Sum of Prime Numbers",sumPrime);