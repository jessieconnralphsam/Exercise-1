function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let prodtotal = firstNum * secondNum;
  document.getElementById("prodResult").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${prodtotal}` ;
}


function displayDiff() {

  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

   let difftotal = firstNum - secondNum;
  
  document.getElementById("diffResult").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${difftotal}` ;
}

  
document.getElementById('multiplyButton').addEventListener("click", displayProduct);
document.getElementById('subButton').addEventListener("click", displayDiff);
