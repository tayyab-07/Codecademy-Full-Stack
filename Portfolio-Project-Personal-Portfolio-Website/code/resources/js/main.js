// const box3 = document.querySelector('.box3');

// box3.addEventListener('click', () => {
//   box3.classList.toggle('clicked');
// });

const box3 = document.querySelector('.box3');
const area = document.querySelector('.area');

box3.addEventListener('click', ()=> {

  box3.classList.toggle('show');

  if (area.classList.contains('hidden')) 
  {
    area.classList.remove('hidden');
    area.classList.add('show');
  }
  else 
  {
    area.classList.remove('show');
    area.classList.add('hidden');
  }
});