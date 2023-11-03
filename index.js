
function esDivisible(num, divisor) {
    return num % divisor === 0;
  }
  
  for (let i = 1; i <= 100; i++) {
    
    let resultado = "";

    if (esDivisible(i, 3)) {
      resultado += "Fizz";
    }
  
    if (esDivisible(i, 5)) {
      resultado += "Buzz";
    }
  
    if (resultado === "") {
      resultado = i;
    }
    
    console.log(resultado);
  } 

  esDivisible();