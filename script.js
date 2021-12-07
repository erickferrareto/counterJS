let resposta = document.getElementById('resposta').innerHTML = 0

let number = document.getElementById('resposta')


function adicionar(){
  number.innerHTML = resposta += 1
  if( resposta > 0){
    number.style.color = 'blue'
  } 
}
function resetar(){
  location.reload()
}

function diminuir(){
 number.innerHTML = resposta -= 1
 if( resposta < 0) {
    number.style.color = 'red'
  }
}


