document
  .querySelector('#hamburger')
  .addEventListener('click', function () {
    document
      .querySelector('#hamburger-menu')
      .classList
      .toggle('isOpen');
  });

document
  .querySelector('#hamburger-menu')
  .addEventListener('click', function () {
    document
      .querySelector('#hamburger-menu')
      .classList
      .remove('isOpen');
  });
