

var svg = dimple.newSvg("#chartContainer", 590, 400);

d3.csv("data/2004-2008-by-date.csv", function(error, flights) {
  // data = dimple.filterData(flights, "Year", "2004")
  var myChart = new dimple.chart(svg, flights);
  myChart.setBounds(60, 30, 505, 305);
  var x = myChart.addCategoryAxis("x", "Month");
  x.addOrderRule("Month");
  myChart.addMeasureAxis("y", "DepDelay");
  myChart.addLegend(60, 10, 500, 20, "right");
  var s = myChart.addSeries("Year", dimple.plot.line);


  myChart.draw();

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
    d.index = i;
    // d.DateTime = new Date(d.DateTime);
    d.Time = +d.Time;
    d.DayOfWeek = +d.DayOfWeek;
    d.Year = +d.Year;
    d.DepDelay = +d.DepDelay;
    d.Distance = +d.Distance;
  });

  createTiles();


  var min = d3.min(flights, function (d) { return d.DepDelay; });
  var max = d3.max(flights, function (d) { return d.DepDelay; });
  var bucket = d3.scale.quantize().domain([min, max]).range([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);


  for (var i=0; i < flights.length; i++) {

    var delay = flights[i].DepDelay;
    var color = bucket(delay);

    var dS = flights[i].DateTime.split("-");
    var datetime = new Date(dS[0], dS[1], dS[2], dS[3]);
    var day = datetime.getDay();
    var hour = datetime.getHours();

    d3.select("#d" + day + "h" + hour + " .tile .back").classed('q' + color + '-11', true);
  }

  flipTiles();


});


/* ************************** */

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
