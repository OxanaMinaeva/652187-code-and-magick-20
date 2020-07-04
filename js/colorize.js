'use strict';

(function () {
  window.colorize = function (element) {

    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var onWizardPress = function (evt) {
      var wizardElement = evt.target;
      var wizardElementTag = evt.target.tagName.toLowerCase();
      var elementColors = [];
      var elementInput;

      if (wizardElement.classList.contains('wizard-eyes')) {
        elementColors = eyesColors;
        elementInput = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');
      } else if (wizardElement.classList.contains('wizard-coat')) {
        elementColors = coatColors;
        elementInput = document.querySelector('.setup-wizard-appearance input[name=coat-color]');
      } else if (wizardElement.classList.contains('setup-fireball')) {
        elementColors = fireballColors;
        var randomFireballColorRgb = window.converterColor(window.random(elementColors)).rgbColor;
        elementColors = randomFireballColorRgb;
        elementInput = document.querySelector('.setup-fireball-wrap input[name=fireball-color]');

      }

      var randomWizardElementColor = window.random(elementColors);
      if (wizardElementTag === 'use') {
        if (wizardElement.style.fill === randomWizardElementColor) {
          onWizardPress(evt);
        } else {
          wizardElement.style.fill = randomWizardElementColor;
          elementInput.value = randomWizardElementColor;
        }
      } else if (wizardElementTag === 'div') {
        if (wizardElement.style.backgroundColor === randomFireballColorRgb) {
          onWizardPress(evt);
        } else {
          wizardElement.style.backgroundColor = randomFireballColorRgb;
          elementInput.value = randomWizardElementColor;
        }
      }
    };
    element.addEventListener('click', onWizardPress);
  };
})();
