

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

d3.csv("data/2004-2008-by-date.csv", function(error, flights) {

  // Various formatters.
  var formatNumber = d3.format(",d"),
      formatChange = d3.format("+,d"),
      formatDate = d3.time.format("%B %d, %Y"),
      formatTime = d3.time.format("%I:%M %p");

  // A nest operator, for grouping the flight list.
  var nestByDate = d3.nest()
      .key(function(d) { return d3.time.day(d.Date); });

  // A little coercion, since the CSV is untyped.
  flights.forEach(function(d, i) {
    d.index = i;
    d.date = new Date(d.Year, +d.Month - 1, d.DayofMonth, d.CRSDepTime);
    d.year = +d.Year;
    d.delay = +d.DepDelay;
    d.distance = +d.Distance;
  });

  createTiles();

  debugger;



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

  var bucket = d3.scale.quantize().domain([0, 50]).range([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);



  d3.select("#d0h0 .tile .front").classed('q2-11', true);

}
