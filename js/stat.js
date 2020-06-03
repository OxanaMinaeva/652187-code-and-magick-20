'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var COLUMN_MAX_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_SPACE = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


var getResultText = function (ctx, text, x, y) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};


var getSaturation = function () {
  var saturation = 0;
  saturation = Math.floor(Math.random() * 100);
  saturation = String(saturation) + '%';
  return saturation;
};


var getColumnMaxHeight = function (levelTime) {
  var maxHeight = levelTime[0];
  for (var i = 1; i < levelTime.length; i++) {
    if (maxHeight < levelTime[i]) {
      maxHeight = levelTime[i];
    }
  }
  return Math.round(maxHeight);
};


window.renderStatistics = function (ctx, players, levelTime) {
  var firstOffset = 0;
  var columnHeight = 0;
  var playerName = '';

  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, 'white');

  getResultText(ctx, 'Ура вы победили!', 120, 30);
  getResultText(ctx, 'Список результатов:', 120, 50);

  firstOffset = 100 + (CLOUD_WIDTH - (COLUMN_WIDTH * players.length) - (COLUMN_SPACE * (players.length - 1))) / 2;
  for (var i = 0; i < players.length; i++) {
    playerName = players[i];
    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + getSaturation() + ', 50%)';
    }

    columnHeight = Math.round(Math.round(levelTime[i]) * COLUMN_MAX_HEIGHT / getColumnMaxHeight(levelTime));
    ctx.fillRect(firstOffset + (COLUMN_WIDTH + COLUMN_SPACE) * i, CLOUD_HEIGHT - columnHeight - 20, COLUMN_WIDTH, columnHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(levelTime[i]), firstOffset + (COLUMN_WIDTH + COLUMN_SPACE) * i, CLOUD_HEIGHT - 10 - 16 * 2 - columnHeight);
    ctx.fillText(playerName, firstOffset + (COLUMN_WIDTH + COLUMN_SPACE) * i, CLOUD_HEIGHT - 10);
  }
};
