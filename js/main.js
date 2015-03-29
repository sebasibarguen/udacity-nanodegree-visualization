/*
This graphic is inspired (and borrowed some code) from
Trulias 247 visualization: trulia.com/vis/tru247/


*/

var svgLine = dimple.newSvg("#chartContainer", 590, 400);
var svgHist = dimple.newSvg("#hourHistogram", 590, 400);

d3.csv("data/2004-2008-by-date.csv", function(error, flights) {

  flights.forEach(function(d, i) {
    var dateArray = d.Date.split("-");
    d.dt = new Date(dateArray[0], dateArray[1], dateArray[2]);

    d.index = i;
    // d.DateTime = new Date(d.DateTime);
    d.Time = +d.dt.getHours();
    d.DayOfWeek = +d.dt.getDay();
    d.Year = +d.dt.getFullYear();
    d.DepDelay = +d.DepDelay;
    d.Distance = +d.Distance;
  });

  // data = dimple.filterData(flights, "Year", "2004")
  var lineChart = new dimple.chart(svgLine, flights);
  lineChart.setBounds(60, 30, 505, 305);
  var x = lineChart.addCategoryAxis("x", "Month");
  x.addOrderRule("Month");
  lineChart.addMeasureAxis("y", "DepDelay");
  lineChart.addLegend(60, 10, 500, 20, "right");
  var s = lineChart.addSeries("Year", dimple.plot.line);


  lineChart.draw();

});



//
var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'],
  days = [
    { name: 'Monday', abbr: 'Mo' },
    { name: 'Tuesday', abbr: 'Tu' },
    { name: 'Wednesday', abbr: 'We' },
    { name: 'Thursday', abbr: 'Th' },
    { name: 'Friday', abbr: 'Fr' },
    { name: 'Saturday', abbr: 'Sa' },
    { name: 'Sunday', abbr: 'Su' }
  ];

d3.csv("data/2004-DateTime.csv", function(error, flights) {

  // A nest operator, for grouping the flight list.
  // var nestByYear = d3.nest()
  //     .key(function(d) { return d3.time.day(d.Year); });

  // A little coercion, since the CSV is untyped.
  flights.forEach(function(d, i) {
    var dateArray = d.DateTime.split("-");
    d.dt = new Date(dateArray[0], dateArray[1], dateArray[2], dateArray[3]);

    d.index = i;
    // d.DateTime = new Date(d.DateTime);
    d.Time = +d.dt.getHours();
    d.DayOfWeek = +d.dt.getDay();
    d.Year = +d.dt.getFullYear();
    d.DepDelay = +d.DepDelay;
    d.Distance = +d.Distance;
  });

  data = flights.filter(function(d){
    if(isNaN(d.Time)){
        return false;
    }
    d.Time = parseInt(d.Time);
    return true;
  });


  createTiles();

  var min = d3.min(flights, function (d) { return d.DepDelay; });
  var max = d3.max(flights, function (d) { return d.DepDelay; });
  console.log(max);
  var bucket = d3.scale.quantize().domain([min, max]).range([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);


  for (var i=0; i < flights.length; i++) {

    var f = flights[i];

    var delay = f.DepDelay;
    var color = bucket(delay);

    d3.select("#d" + f.DayOfWeek + "h" + f.Time + " .tile .back").classed('q' + color + '-11', true);
  }

  flipTiles();


  // Dimple histogram

  var histogram = new dimple.chart(svgHist, flights);
  histogram.setBounds(60, 30, 510, 305)
  var x = histogram.addCategoryAxis("x", "Time");
  x.addOrderRule("Time");
  histogram.addMeasureAxis("y", "DepDelay");
  histogram.addSeries(null, dimple.plot.bar);
  histogram.draw();



});


/* **************************
* Took this function from the Trulia Graphic.
*/

function createTiles() {

	var html = '<table id="tiles" class="front">';
	html += '<tr><th><div>&nbsp;</div></th>';

	for (var h = 0; h < hours.length; h++) {
		html += '<th class="h' + h + '">' + hours[h] + '</th>';
	}

	html += '</tr>';

	for (var d = 0; d < days.length; d++) {
		html += '<tr class="d' + d + '">';
		html += '<th>' + days[d].abbr + '</th>';
		for (var h = 0; h < hours.length; h++) {
			html += '<td id="d' + d + 'h' + h + '" class="d' + d + ' h' + h + '"><div class="tile"><div class="face front"></div><div class="face back"></div></div></td>';
		}
		html += '</tr>';
	}

	html += '</table>';
	d3.select('#visualization').html(html);
}

function colorTiles() {




}

// Also copied this function from trulia, because the
// animation looks so awesome :)
function flipTiles() {

	var oldSide = d3.select('#tiles').attr('class'),
		newSide = '';

	if (oldSide == 'front') {
		newSide = 'back';
	} else {
		newSide = 'front';
	}

	var flipper = function(h, d, side) {
		return function() {
			var sel = '#d' + d + 'h' + h + ' .tile',
				rotateY = 'rotateY(180deg)';

			if (side === 'back') {
				rotateY = 'rotateY(0deg)';
			}

			d3.select(sel).style('-webkit-transform', rotateY);

		};
	};

	for (var h = 0; h < hours.length; h++) {
		for (var d = 0; d < days.length; d++) {
			var side = d3.select('#tiles').attr('class');
			setTimeout(flipper(h, d, side), (h * 20) + (d * 20) + (Math.random() * 100));
		}
	}
	d3.select('#tiles').attr('class', newSide);
}
