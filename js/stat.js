var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_GISTO_X = 40;
var GAP_GISTO_Y = 40;
var GAP_GISTO_TEXT = 20;
var GISTO_WIDTH = 40;
var GISTO_STEP = GISTO_WIDTH + 50;
var GISTO_HEIGHT = 150;
var rand = Math.random();

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 235, 30);
  ctx.fillText('Список результатов:', 220, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText(names[i], CLOUD_X + GAP_GISTO_X + GISTO_STEP * [i], CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_TEXT);
  ctx.fillRect(CLOUD_X + GAP_GISTO_X + GISTO_STEP * [i], CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_Y, GISTO_WIDTH, (-GISTO_HEIGHT * times[i]) / maxTime);
  ctx.fillText(String(times[i]), CLOUD_X + GAP_GISTO_X + GISTO_STEP * [i], (-GISTO_HEIGHT * times[i]) / maxTime - GAP_GISTO_TEXT);

}
  };



