const slide = () => {
  const burger = document.querySelector('.burger');
  const navlinks= document.querySelector('.navlinks');
  burger.addEventListener('click',() =>{
    navlinks.classList.toggle('open');
    
  });
}

slide();

const hide = () => {
  const anchor=document.querySelector('.anchor');
  const navlinks=document.querySelector('.navlinks');
  anchor.addEventListener('click', ()=>{
    navlinks.classList.remove('open')
  })
}
const hide2 = () => {
  const anchor=document.querySelector('.anchor2');
  const navlinks=document.querySelector('.navlinks');
  anchor.addEventListener('click', ()=>{
    navlinks.classList.remove('open')
  })
}
const hide3 = () => {
  const anchor=document.querySelector('.anchor3');
  const navlinks=document.querySelector('.navlinks');
  anchor.addEventListener('click', ()=>{
    navlinks.classList.remove('open')
  })
}
const hide4 = () => {
  const anchor=document.querySelector('.anchor4');
  const navlinks=document.querySelector('.navlinks');
  anchor.addEventListener('click', ()=>{
    navlinks.classList.remove('open')
  })
}
hide();
hide2();
hide3();
hide4();