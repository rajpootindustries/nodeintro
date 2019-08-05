
function math(num1, num2, operator){
var result = null;
  switch (operator){
    case '-':
      result = num1 - num2;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1*num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      break;
  }
  console.log(result);
}

var num1 = process.argv[2];
var num2 = process.argv[3];
var operator = process.argv[4];

math(num1,num2,operator);
// console.log(process.argv);
