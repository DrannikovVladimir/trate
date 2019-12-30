const menu = document.querySelector('.menu');
const menuItems = Array.from(menu.querySelectorAll('.menu__item span'));

menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function(evt) {
    const menuInner = menuItem.parentNode.querySelector('.list-inner');

    if (menuInner.classList.contains('hidden')) {
      const menuInnerAll = Array.from(menu.querySelectorAll('.list-inner'));

      menuInnerAll.forEach(function(menu) {
        menu.classList.add('hidden');
      });
      menuInner.classList.remove('hidden');

      Array.from(menu.querySelectorAll('.menu__item')).forEach(function(item) {
        item.style.backgroundColor = '';
      });
      menuItem.parentNode.style.backgroundColor = '#C22A2E';
    } else {
      menuInner.classList.add('hidden');
      menuItem.parentNode.style.backgroundColor = '';
    }
  });

  menuItem.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
      const menuInner = menuItem.parentNode.querySelector('.list-inner');

      if (menuInner.classList.contains('hidden')) {
        const menuInnerAll = Array.from(menu.querySelectorAll('.list-inner'));

        menuInnerAll.forEach(function(menu) {
          menu.classList.add('hidden');
        });
        menuInner.classList.remove('hidden');

        Array.from(menu.querySelectorAll('.menu__item')).forEach(function(item) {
          item.style.backgroundColor = '';
        });
        menuItem.parentNode.style.backgroundColor = '#C22A2E';
      } else {
        menuInner.classList.add('hidden');
        menuItem.parentNode.style.backgroundColor = '';
      }
    }
  });
});
