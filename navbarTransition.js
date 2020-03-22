const slide = () => {
  const burger = document.querySelector('.burger');
  const navlinks= document.querySelector('.navlinks');
  console.log('hiii1111')
  burger.addEventListener('click',() =>{
    navlinks.classList.toggle('open');
    console.log('hiiii2222_')
    console.log(navlinks.className)
  });
}

slide();