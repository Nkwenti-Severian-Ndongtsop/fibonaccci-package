// A function to get the fibonacci sequence
function fibonacciNumber(integer){
    sequence = [BigInt(0), BigInt(1)];
    if (integer === 0){
      return 0
    } else for ( i=2; i<=integer; i++ ){
      sequence[i] = sequence[i-1] + sequence[i-2]
    }
    count = 2;
    result = BigInt(1);
      while (count < integer){
        result = result + sequence[count];
        count++
      }
      return result
}
console.log(fibonacciNumber(10000));
