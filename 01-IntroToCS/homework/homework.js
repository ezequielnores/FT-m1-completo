'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;
  var pos = 0;
    for (let i = num.length -1; i >=0; i--) {
    suma = suma + num[i] * 2 ** pos;
    pos++;
  }
    return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = '';
  while(num != 0){
    binario = num % 2 + binario;
    num = Math.floor (num / 2);
    }
    return binario;
  }


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}