const menu = document.querySelector('.list-menu');

menu.addEventListener('click', function(evt) {
  const menuItem = evt.target;
  const innerMenu = menuItem.querySelector('.list-inner');
  innerMenu.classList.toggle('hidden');

  document.addEventListener('click', function(evt) {
    if (evt.target !== menuItem) {
      innerMenu.classList.add('hidden');
    }
  });
});
