const saida = document.querySelector(".Name");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 180);
  }
}

digitacao("Junielly monte", 0);

