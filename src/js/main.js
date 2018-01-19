// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("component-image-slider");

var $ = require("./lib/qsa");

var Chartist = require("chartist");

var chart = new Chartist.Line(".league-comparison .chart");

var updateChart = function() {
  var mode = $.one(`input[name="mode"]:checked`).id;
  console.log(mode);
  var data = {
    labels: window.hofData.edgar.map(r => r.season),
    series: [
      window.hofData.edgar.map(r => r[mode]),
      window.hofData.mvps.map(r => r[mode]),
      window.hofData.league.map(r => r[mode])
    ]
  };

  chart.update(data, {
    lineSmooth: Chartist.Interpolation.none({
       fillHoles: false
    })
  });
}

updateChart();

$.one(".modes").addEventListener("change", updateChart);