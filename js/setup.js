'use strict';

var WIZARD_COUNT = 4;

var wizard = {};
var wizards = [];

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var classRemove = function (selector, removeClass) {
  selector.classList.remove(removeClass);
};

var setup = document.querySelector('.setup');
classRemove(setup, 'hidden');


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
classRemove(setup.querySelector('.setup-similar'), 'hidden');

