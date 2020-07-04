'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');

  window.wizardsFragments();
  setup.querySelector('.setup-similar').classList.remove('hidden');


  window.colorize(wizardEyes);
  window.colorize(wizardCoat);
  window.colorize(fireballWrap);

})();
