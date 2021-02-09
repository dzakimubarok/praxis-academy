var num1, num2;
num1 = window.prompt("Input the First integer", "0");//1
num2 = window.prompt("Input the second integer", "0");//2
                                                 
if(parseInt(num1) > parseInt(num2)) 
  { 
  alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2) > parseInt(num1)) 
  {
  alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
  alert("The values "+ num1+ " and "+num2+ " are equal.");
  }
  