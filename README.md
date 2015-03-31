# Data Visualization - US Flight Delays

## Summary

*Is there a relationship between time of day, day of week and the delay time for flights?* By looking at the [Rita Flight dataset](). This visualization presents three charts showing the relationship between **flight delay times** and
periods of time (month/day of week and hour of day).

## Design
explain any design choices you made including changes to the visualization after collecting feedback

For the first visualization, I decided to use a calendar grid comparing how flight
delays vary depending on the hour of day and day of week. The inspiration came from a Trulia
graph depicting the time of day and day of week most people go house hunting. The idea
behind the design is to use hue-colors as a way to communicate the amount of delay time,
hotter colors representing longer delays while cooler colors shorter. The reasons for choosing
the use of colors and a grid chart is that in just one graph we are able to group the relationship between
three variables and make it aesthetically pleasing way. It permits us to look at relationships like,
**what's the worst day-time of the week regarding flight time delays?**, **are time delays worst
on early Tuesdays or late Fridays?**.

**Variables**
- distance x: hour of day
- distance y: day of week
- color hue: flight delay time

To still explore and communicate the relationship between flight delays and dates, I included
a **bar graph** of delay time vs hours of day and a **line chart** showing the relationship
of flight delays and the month of the year.

### Sketch
![Sketch](/img/visualization_sketch.jpg)

*This is the first sketch I did to get an overview idea of the visualizations I was
planning to use.*

### Version 1

![Version 1](/img/visualization_v1.png)

*This first implementation took some time. The biggest problems where basically formatting
the data so that the site uses an aggregate sample because the original files are* **600mb** *or
larger. So I implemented `process_data.py` script to take care of that.*

### Version 2

![Version 1](/img/visualization_v2.png)

*For the second version, the biggest changes based on feedback were:*
1. Include a legend for the first graph, the message was not clear.
2. Add chart titles and

### Version 3

*For the third version, the biggest changes based on feedback were:*
1. Fixed an issue with the bar chart including NaN values
2. Removed non-existing 2009 data from line chart

![Version 1](/img/visualization_v3.png)

### Selecting the dataset
For this data

## Feedback
include all feedback you received from others on your visualization from the first sketch to the final visualization

### First interview
> What do the colors of the first graphic mean?
Both graphs below don't clearly show the relationship they are tying to show, it takes time to understand.
I liked a lot the interaction that both small graphs have.
What does DepDelay mean?
The graph in the bottom left does not have units of the time being measured (months, days, years)?
What is the purpose of the graphs?
I like the colors and design of the graphs, but I feel they lack context.
Months 5-9 increase DepDelay, surely because of the increased amount of flights in summer time.
> -Brother



## Resources
list any sources you consulted to create your visualization

- [Trulia 247 visualization](http://www.trulia.com/vis/tru247/)
- [D3.JS Documentation](d3js.org)
- [Dimple.JS Documentation](http://dimplejs.org/)
- [Bootstrap for styling](http://getbootstrap.com)

## Files

- To process the original RITA files, I built the `process_data.py` script.
- The data used is `data/2004-DateTime.csv` for the first two visualizations,
and `data/data/2004-2008-by-date.csv` for the line chart.
