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
  var data = {
    labels: window.hofData.edgar.map(r => r.season),
    series: Object.keys(window.hofData).sort().reverse().map(name => ({
      className: name,
      data: window.hofData[name].map(d => d[mode]) 
    }))
  };

  chart.update(data, {
    lineSmooth: Chartist.Interpolation.none({
       fillHoles: false
    })
  });
}

updateChart();

$.one(".modes").addEventListener("change", updateChart);