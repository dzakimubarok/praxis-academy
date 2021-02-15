var runningSum = (nums) => {
  var num1 = 0;
  var num2 = 1;
  var sum = 1;
  var i=0;
  var total;
  
  for(i = 1; i <= nums; i++){
      sum += num2;
      total = sum;
  }
  return total;
  };
var jumlah = runningSum(4);
console.log(jumlah);