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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 235, 30);
  ctx.fillText('Список результатов:', 220, 50);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', CLOUD_X + GAP_GISTO_X, CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_TEXT);
  ctx.fillRect(CLOUD_X + GAP_GISTO_X, CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_Y, GISTO_WIDTH, -100);

  ctx.fillStyle = '#00F';
  ctx.fillText('Иван', CLOUD_X + GAP_GISTO_X + GISTO_STEP, CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_TEXT);
  ctx.fillRect(CLOUD_X + GAP_GISTO_X + GISTO_STEP, CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_Y, GISTO_WIDTH, -120);

  ctx.fillText('Юлия', CLOUD_X + GAP_GISTO_X + GISTO_STEP + GISTO_STEP, CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_TEXT);
  ctx.fillRect(CLOUD_X + GAP_GISTO_X + GISTO_STEP + GISTO_STEP, CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_Y, GISTO_WIDTH, -80);

  };


