const cartaVerso = document.getElementById('carta-verso')
const cartas = ['cinco-de-ouros.png', 'nove-de-espadas.png', 'quatro-de-paus.png', 'seis-de-copas.png', 'sete-de-espadas.png', 'sete-de-paus.png', 'tres-de-ouros.png']
const effects = {
  0 : 'invertFx',
  1 : 'rotateFx',
  2 : 'scaleFx'
}

cartaVerso.addEventListener('click', () => {
  let newRow = document.createElement('div')
  newRow.className = 'row'
  const baralho = []
  for (let i = 0; i < 7 ; i++) {
    let newIndex = Math.floor(Math.random() * 7)
    baralho.push(cartas[newIndex])
  }
  baralho.forEach( carta => {
    let novaCarta = document.createElement('img')
    let newEffectIndex = Math.floor(Math.random()*3)
    novaCarta.src = `img/${carta}`
    novaCarta.addEventListener('mouseover', () => novaCarta.className = `transition ${effects[newEffectIndex]}`)
    novaCarta.addEventListener('mouseleave', () => novaCarta.className = ``)
    newRow.appendChild(novaCarta)
  })
  document.querySelector('.container').appendChild(newRow)
})
