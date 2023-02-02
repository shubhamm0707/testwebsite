var btn = document.getElementById('btn1');
var header = document.getElementById('header');

btn.addEventListener('click' , ()=>{
  if (header.classList.contains('show')) {
       header.classList.toggle('hide');
  }
})