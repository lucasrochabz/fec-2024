const img = document.querySelector('img')

const btn = document.querySelector('.next')
const h2 = document.querySelector('h2')

let jogadorNumero = 1

function handleNext() {
  jogadorNumero++

  if(jogadorNumero > 2) {
    jogadorNumero = 1
  }

  if(jogadorNumero === 1) {
    img.src = `/imagens/jogador1.png`
    h2.innerText = 'Tinga'
  } else if (jogadorNumero === 2){
    img.src = `/imagens/jogador2.png`
    h2.innerText = 'Titi'
  }
}

btn.addEventListener('click', handleNext)
