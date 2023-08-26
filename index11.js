let btn = document.querySelector('#btn');
let p = document.querySelector('p');

btn.addEventListener('click',function () {
    let timer = setInterval(() => {
   +p.textContent--;
  if(+p.textContent <= 0) {
    clearInterval(timer)
    } 
    }, 1000);
    } );



