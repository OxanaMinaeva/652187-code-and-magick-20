'use strict';

(function () {
  window.random = function (wizardsFeature) {
    var randomIndex = Math.floor(Math.random() * wizardsFeature.length);
    return wizardsFeature[randomIndex];
  };
})();
