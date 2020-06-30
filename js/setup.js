'use strict';

var WIZARD_COUNT = 4;

var wizard = {};
var wizards = [];

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (document.activeElement.name !== 'username') {
    if (evt.key === 'Escape') {
      closePopup();
    }
  }
};

var onPopupNoSubmitEnterPress = function (evt) {
  if (document.activeElement.className !== 'button setup-submit' && evt.keyCode === 13) {
    evt.preventDefault();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  document.addEventListener('keydown', onPopupNoSubmitEnterPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.removeEventListener('keydown', onPopupNoSubmitEnterPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var arrayRandomElem = function (wizardsFeature) {
  var randomIndex = Math.floor(Math.random() * wizardsFeature.length);
  return wizardsFeature[randomIndex];
};


var createWizard = function () {
  var name = arrayRandomElem(firstNames) + ' ' + arrayRandomElem(lastNames);
  var coatColor = arrayRandomElem(coatColors);
  var eyesColor = arrayRandomElem(eyesColors);
  wizard = {
    name: name,
    coatColor: coatColor,
    eyesColor: eyesColor
  };
  return wizard;
};

var createWizards = function (wizardCount) {
  for (var i = 0; i < wizardCount; i++) {
    createWizard();
    wizards.push(wizard);
  }
  return wizards;
};

var createFragment = function () {
  var fragment = document.createDocumentFragment();
  createWizards(WIZARD_COUNT);
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var renderWizard = function (readyWizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = readyWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = readyWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = readyWizard.eyesColor;
  return wizardElement;
};

createFragment();
setup.querySelector('.setup-similar').classList.remove('hidden');

var onCoatPress = function () {
  var randomCoatColor = arrayRandomElem(coatColors);
  if (wizardCoat.style.fill === randomCoatColor) {
    onCoatPress();
  } else {
    wizardCoat.style.fill = randomCoatColor;
    document.querySelector('.setup-wizard-appearance input[name=coat-color]').value = randomCoatColor;
  }
};

var onEyesPress = function () {
  var randomEyesColor = arrayRandomElem(eyesColors);
  if (wizardEyes.style.fill === randomEyesColor) {
    onEyesPress();
  } else {
    wizardEyes.style.fill = randomEyesColor;
    document.querySelector('.setup-wizard-appearance input[name=eyes-color]').value = randomEyesColor;
  }
};


function convertColorHexToRgb(color) {
  if (color.substring(0, 1) === '#') {
    color = color.substring(1);
  }
  var rgbColor = 'rgb(' + parseInt(color.substring(0, 2), 16) + ', ' + parseInt(color.substring(2, 4), 16) + ', ' + parseInt(color.substring(4), 16) + ')';
  return rgbColor;
}

var onFireballPress = function () {
  var randomFireballColor = arrayRandomElem(fireballColors);
  var randomFireballColorRgb = convertColorHexToRgb(randomFireballColor);
  if (fireballWrap.style.backgroundColor === randomFireballColorRgb) {
    onFireballPress();
  } else {
    fireballWrap.style.backgroundColor = randomFireballColorRgb;
    document.querySelector('.setup-fireball-wrap input[name=fireball-color]').value = randomFireballColor;
  }
};

wizardCoat.addEventListener('click', onCoatPress);
wizardEyes.addEventListener('click', onEyesPress);
fireballWrap.addEventListener('click', onFireballPress);
