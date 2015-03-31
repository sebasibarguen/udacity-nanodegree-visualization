# Data Visualization - US Flight Delays

## Summary

*Is there a relationship between time of day, day of week and the delay time for flights?* By looking at the [Rita Flight dataset](). This visualization presents three charts showing the relationship between **flight delay times** and
periods of time (month/day of week and hour of day).

[View the visualization](http://sebasibarguen.github.io/udacity-nanodegree-visualization/)

## Design

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

A bar graph was chosen to display the relationship between hours of day and flight delay time
because in this case, hours of the day represent a categorical data which aggregated various
data from all the days of the year.

For the month graph, a line chart made more sense to show the trends in flight delay over time
for a given year. A general pattern does emerge, which tells us more delay's happen during
summer and end of year.

### Sketch
![Sketch](/img/visualization_sketch.JPG)

*This is the first sketch I did to get an overview idea of the visualizations I was
planning to use.*

### Version 1

![Version 1](/img/visualization_v1.png)

*This first implementation took some time. The biggest problems where basically formatting
the data so that the site uses an aggregate sample because the original files are* **600mb** *or
larger. So I implemented `process_data.py` script to take care of that.*

### Version 2

![Version 2](/img/visualization_v2.png)

*For the second version, the biggest changes based on feedback were:*
1. Include a legend for the first graph, the message was not clear.
2. Add chart titles and

### Version 3

*For the third version, the biggest changes based on feedback were:*
1. Fixed an issue with the bar chart including NaN values
2. Removed non-existing 2009 data from line chart

![Version 3](/img/visualization_v3.png)


### Final version

*For the third version, the biggest changes based on feedback were:*
1. Fixed issue with some labels in first visualization being different sizes
2. Updated the labels in legend

![Version 4](/img/visualization_v4.png)


### Final thoughts on design

After hearing the feedback and thinking about the message, I believe that these three
graphs are the right design choices.

Complementing the 24/7 grid graph with the bar chart helps clarify the message. After
collecting the feedback, the types of charts did not change, I think they express
the message quite well, but there were some aesthetic and content changes. Mostly fixing
either bugs, clarifying the graphs with titles, labels and legends

I believe that the three charts clearly show that:
* The worst flight delays tend to happen on **Mondays, Thursdays and Sundays around 7pm**
* **7pm** is the hour of the day with highest flight delays on average
* Over the year, the highest flight delays occur during **summer** and **end of year**


## Feedback
To validate and review my visualizations, I conducted 4 interviews. Most were completed through email
and one using [Pixelapse](pixelapse.com). Below you can find the comments.

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

- [Trulia 247 visualization](http://www.trulia.com/vis/tru247/)
- [D3.JS Documentation](d3js.org)
- [Dimple.JS Documentation](http://dimplejs.org/)
- [Bootstrap for styling](http://getbootstrap.com)

## Files

- To process the original RITA files, I built the `process_data.py` script.
- The data used is `data/2004-DateTime.csv` for the first two visualizations,
and `data/data/2004-2008-by-date.csv` for the line chart.

http://sebasibarguen.github.io/udacity-nanodegree-visualization/
