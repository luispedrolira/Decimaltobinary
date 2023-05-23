function convertir() {
    var decimal = document.getElementById('decimal').value;
    var bytes = parseInt(document.getElementById('bytes').value);
    
    // Verificar que se haya ingresado un número decimal
    
    // Convertir el número decimal a binario
    var binario = decimalToBinary(decimal, bytes);
    
    document.getElementById('resultado').value = binario;
  }
  
  function decimalToBinary(decimal, bytes) {
    var binario = parseInt(decimal).toString(2);
    
    var longitud = bytes * 8;
    while (binario.length < longitud) {
      binario = '0' + binario;
    }
    
    return binario;
  }
  