/*
This graphic is inspired (and borrowed some code) from
Trulias 247 visualization: trulia.com/vis/tru247/


*/

var svgLine = dimple.newSvg("#chartContainer", 590, 400);
var svgHist = dimple.newSvg("#hourHistogram", 590, 400);

var monthMap = {1:"Jan", 2:"Feb", 3:"March", 4:"Apr",
                5:"May", 6:"June", 7:"July", 8:"Ago",
                9:"Sep", 10:"Oct", 11:"Nov", 12:"Dec"};
var monthArray = ["Jan", "Feb", "March", "Apr", "May", "June", "July",
                  "Ago", "Sep", "Oct", "Nov", "Dec"];


// helper variables to build visualization
var hours = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
              '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
  days = [
    { name: 'Monday', abbr: 'Mo' },
    { name: 'Tuesday', abbr: 'Tu' },
    { name: 'Wednesday', abbr: 'We' },
    { name: 'Thursday', abbr: 'Th' },
    { name: 'Friday', abbr: 'Fr' },
    { name: 'Saturday', abbr: 'Sa' },
    { name: 'Sunday', abbr: 'Su' }
  ];


// Read the CSV
d3.csv("data/2008-DateTime.csv", function(error, flights) {


  // A little coercion, since the CSV is untyped.
  flights.forEach(function(d, i) {
    var dateArray = d.DateTime.split("-");
    d.dt = new Date(dateArray[0], dateArray[1], dateArray[2], dateArray[3]);

    d.index = i;
    // d.DateTime = new Date(d.DateTime);
    d.Time = +d.dt.getHours();
    d.DayOfWeek = +d.dt.getDay();
    d.Month = +d.dt.getMonth();
    d.Year = +d.dt.getFullYear();
    d.DepDelay = +d.DepDelay;
    d.Distance = +d.Distance;

    d.TimeDay = d.DayOfWeek + "-" + d.Time;
  });


  flights = flights.filter(function(d){
    if(isNaN(d.Time)){
        return false;
    }
    d.Time = parseInt(d.Time);
    return true;
  });

  var flightsByMonth = d3.nest()
                          .key(function(d) { return d.Month; })
                          .rollup(function(d) {
                            return {
                              Month: d3.mean(d, function(g) {
                                if (g.Month == 0) {
                                  return 12;
                                } else {
                                  return g.Month;
                                }
                                }),
                              DepDelay: d3.mean(d, function(g) { return g.DepDelay; })
                              };
                          })
                          .entries(flights);

  // The nested operation gives back a list of objects that contain inside them
  // a values object, which is actually what we want.
  for (var i = 0; i < flightsByMonth.length; i++){
    flightsByMonth[i] = flightsByMonth[i].values;
  }

  // build the line chart
  var lineChart = new dimple.chart(svgLine, flightsByMonth);
  lineChart.setBounds(60, 30, 505, 305);
  var lineX = lineChart.addCategoryAxis("x", "Month");
  lineX.addOrderRule(monthArray);
  var lineY = lineChart.addMeasureAxis("y", "DepDelay");
  lineChart.addSeries(null, dimple.plot.line);
  var dots = lineChart.addSeries(null, dimple.plot.scatter);

  lineChart.draw();

  lineX.titleShape.text("Month of Year");
  lineY.titleShape.text("Flight Delay in minutes");

  var lineFocus = d3.select("#chartContainer")
                   .selectAll("circle")
                   .attr("fill", function(d) {
                        if (d.height > 40) {
                            return "#D53E4F";
                          }
                        else {
                          return "#3288BD";
                          }
                     });

   dots.getTooltipText = function (e) {
                 return [
                     "" + Math.round(e.y) + " min",
                 ];
             };



  // A nest operator, for grouping the flight list into the newly created
  // variable, TimeDay, which is basically a Day of Week (0-6) together with
  // the hour of day (0-23).
  var flights = d3.nest()
                  .key(function(d) { return d.TimeDay; })
                  .rollup(function(d) {
                    var result = {
                      "DepDelay": d3.mean(d, function(g) { return g.DepDelay;}),
                      "Time": d3.mean(d, function(g) { return g.Time;}),
                      "DayOfWeek": d3.mean(d, function(g) { return g.DayOfWeek;})
                    };
                    return result;
                  })
                  .entries(flights);


  // The nested operation gives back a list of objects that contain inside them
  // a values object, which is actually what we want.
  for (var i = 0; i < flights.length; i++){
    flights[i] = flights[i].values;
  }

  // Call the function to build the tiles.
  createTiles();

  // Calculate min-max to use with D3.js scale
  var min = d3.min(flights, function (d) { return d.DepDelay; });
  var max = d3.max(flights, function (d) { return d.DepDelay; });
  var bucket = d3.scale.quantize().domain([15, 80]).range([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  // This loop assigns the CSS classes to each tile so as to assign it
  // an appropriate color based on the `bucket` scaling domain-range relation.
  for (var i=0; i < flights.length; i++) {

    var f = flights[i];

    var delay = f.DepDelay;
    var color = bucket(delay);

    d3.select("#d" + f.DayOfWeek + "h" + f.Time + " .tile .front")
        .classed('q' + color + '-11', true)
        .attr('delay', function(){ return delay })
        .attr('data-toggle', 'tooltip')
        .attr('title', '' + Math.round(delay));
  }

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });


/*
This part is commented out, trying to build another visualization that gives a
overview of the data. Max flight time, number of flights...
*/
  // var summary = d3.select("#summary_visualization"),
  //     summaryWidth = 1000,
  //     summaryHeight = 250,
  //     scale = d3.scale.linear().domain([-5000, 15000]).range([1000, 10000]),
  //     minScaled = scale(min),
  //     maxScaled = scale(max),
  //     minR = Math.sqrt(minScaled),
  //     maxR = Math.sqrt(maxScaled),
  //     cy = summaryHeight/2;
  //
  //
  // var circleData = [
  //   {"cy": cy, "cx": minR + 50, "r": minR, "class": "summary-min"},
  //   {"cy": cy, "cx": maxR*2 + 50, "r": maxR, "class": "summary-max"}
  // ];
  //
  // summary.style("width", summaryWidth)
  //         .style("height", summaryHeight);
  //
  // var circles = summary.selectAll("circle")
  //                     .data(circleData)
  //                     .enter()
  //                     .append("circle");
  //
  // circles.attr("cy", function(d, i) { return d.cy; })
  //        .attr("cx", function(d, i) { return d.cx; })
  //        .attr("r", function(d) { return d.r; })
  //        .attr("class", function(d) { return d.class; })
  //        .attr("fill-opacity", 0.80);
  //
  // // debugger;
  // var labelData = [
  //   {"y": cy - 20, "x": minR + 25, "class": "summary-labels", "text": "Min"},
  //   {"y": cy - 20, "x": maxR*2 + 25, "class": "summary-labels", "text": "Max"},
  //   {"y": cy, "x": minR + 25, "class": "summary-labels", "text": Math.round(min)},
  //   {"y": cy, "x": maxR*2 + 25, "class": "summary-labels", "text": Math.round(max)}
  // ];
  //
  // var labels = summary.selectAll("text")
  //                     .data(labelData)
  //                     .enter()
  //                     .append("text");
  //
  // labels.text(function (d) { return d.text; })
  //       .attr("y", function(d, i) { return d.y; })
  //       .attr("x", function(d, i) { return d.x; })
  //       .attr("class", function(d) { return d.class; });



  // Dimple histogram
  var histogram = new dimple.chart(svgHist, flights);
  histogram.setBounds(60, 30, 510, 305)
  var x = histogram.addCategoryAxis("x", "Time");
  x.addOrderRule("Time");
  var y = histogram.addMeasureAxis("y", "DepDelay");
  var s = histogram.addSeries(null, dimple.plot.bar);
  s.aggregate = dimple.aggregateMethod.avg;
  histogram.draw();

  x.titleShape.text("Hours of day (24 hour format)");
  y.titleShape.text("Flight Delay in minutes");

  s.getTooltipText = function (e) {
                return [
                    "" + Math.round(e.y) + " min",
                ];
            };

  // Want to give special focus on hours which
  // have highest delay time.
  var barFocus = d3.select("#hourHistogram")
                   .selectAll("rect")
                   .attr("fill", function(d) {
                        if (d.height > 40) {
                            return "#D53E4F";
                          }
                        else {
                          return "#3288BD";
                          }
                     });

});


/* **************************
* Took this function from the Trulia Graphic.
* It creates the HTML for the first visualization. Builds the grid via an
* HTML table, with each cell representing a tile of hour-day of week.
*/

function createTiles() {

	var html = '<table id="tiles" class="front">';
	html += '<tr><th><div>&nbsp;</div></th>';

	for (var h = 0; h < hours.length; h++) {
		html += '<th class="head' + h + '">' + hours[h] + '</th>';
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
