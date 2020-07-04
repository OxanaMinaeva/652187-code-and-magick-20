'use strict';

(function () {
  window.converterColor = function (color) {
    if (color.substring(0, 1) === '#') {
      color = color.substring(1);
    }
    var rgbColor = 'rgb(' + parseInt(color.substring(0, 2), 16) + ', ' + parseInt(color.substring(2, 4), 16) + ', ' + parseInt(color.substring(4), 16) + ')';
    return {
      rgbColor: rgbColor
    };
  };
})();
