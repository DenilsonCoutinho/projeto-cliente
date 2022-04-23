
let sea = document.querySelector('.sea-img');

sea.addEventListener('click', () =>{
    sea.classList.toggle('active')
})


let make = document.querySelector('.make-img');

make.addEventListener('click', () =>{
    make.classList.toggle('active')
})

let fashion = document.querySelector('.fashion-img');

fashion.addEventListener('click', () =>{
    fashion.classList.toggle('active')
})

let business = document.querySelector('.business');

business.addEventListener('click', () =>{
    business.classList.toggle('active')
})

let hobbies = document.querySelector('.hobbies-img');

hobbies.addEventListener('click', () =>{
    hobbies.classList.toggle('active')
})

const saida = document.querySelector(".Name");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 89);
  }
}

digitacao("Junielly monte", 0);
