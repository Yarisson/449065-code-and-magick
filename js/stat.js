'use strict';
var CLOUD_WIDTH = 420; // Ширина облака
var CLOUD_HEIGHT = 270; // Высота облака
var CLOUD_X = 100; // Начальная координата облака по горизонтали
var CLOUD_Y = 10; // Начальная координата облака по вертикали
var GAP = 10; // Отступ для тени облака
var GAP_GISTO_X = 40; // Отступ по горизонтали от края поля облака для колонки гистограммы
var GAP_GISTO_Y = 40; // Отступ по вертикали от края поля облака для колонки гистограммы
var GAP_GISTO_TEXT = 20; // Отступ для текста
var GISTO_WIDTH = 40; // Ширина колонки гистограммы
var GISTO_STEP = GISTO_WIDTH + 50; // Горизонтальный отступ между колонками гистограммы
var GISTO_HEIGHT = 150; // Максимальная высота колонки гистограммы
var GISTO_GAP_TIMES = 25; // Отступ по вертикали для статистики гистограммы

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT); // Функция рисующая облако
};

var getMaxElement = function (arr) { // Функция определения максимального значения элемента массива для определения времени
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
    var fillColor1 = Math.round(255 * Math.random());
    var fillColor2 = Math.round(255 * Math.random());
    var fillColor3 = Math.round(255 * Math.random());
    var randomShadow = Math.random();
    ctx.fillStyle = 'rgba(' + fillColor1 + ', ' + fillColor2 + ', ' + fillColor3 + ', ' + randomShadow + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillText(names[i], CLOUD_X + GAP_GISTO_X + GISTO_STEP * [i], CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_TEXT);
    ctx.fillRect(CLOUD_X + GAP_GISTO_X + GISTO_STEP * [i], CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_Y, GISTO_WIDTH, (-GISTO_HEIGHT * times[i]) / maxTime);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_GISTO_X + GISTO_STEP * [i], CLOUD_Y + CLOUD_HEIGHT - GAP_GISTO_TEXT - (GISTO_HEIGHT * times[i] / maxTime) - GISTO_GAP_TIMES);

  }

};
