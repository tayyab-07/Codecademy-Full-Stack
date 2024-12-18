const box_desc = document.querySelector('.box-desc');
const area = document.querySelector('.area');

box_desc.addEventListener('click', ()=> {

  box_desc.classList.toggle('show');

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