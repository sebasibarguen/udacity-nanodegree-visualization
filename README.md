# Data Visualization - US Flight Delays

## Summary

By looking at the [Rita Flight dataset](http://stat-computing.org/dataexpo/2009/the-data.html), This visualization presents three charts showing the relationship between **flight delay times** and
periods of time (month/day of week and hour of day).

[View the visualization](http://sebasibarguen.github.io/udacity-nanodegree-visualization/)

## Design

For the first visualization, I decided to use a calendar grid comparing how flight
delays vary depending on the hour of day and day of week. The inspiration came from a Trulia
graph depicting the time of day and day of week most people go house hunting. The idea
behind the design is to use hue-colors as a way to communicate the amount of delay time,
hotter colors representing longer delays while cooler colors shorter. The reasons for choosing
the use of colors and a grid chart is that in just one graph we are able to group the relationship between
three variables and make it aesthetically pleasing way. It permits us to look at relationships like:
**what's the worst day-time of the week regarding flight time delays?** **Are time delays worst
on early Tuesdays or late Fridays?**

**Visual encodings for main visualization:**
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

### Layout
For the layout, given that I chose to se three charts, I decided to include the larger one on top. It is
also the primary visualization and the one that captures most attention given the colors and design, so
I think that having the top section of the webpage makes most sense. As a complement to the main
visualization, both the bar and line charts serve to augment the primary visualization.

### Sketch
![Sketch](/img/visualization_sketch.JPG)

*This is the first sketch I did to get an overview idea of the visualizations I was
planning to use.*

### Version 1

![Version 1](https://www.evernote.com/shard/s14/sh/65887338-ebad-49cb-b477-5796b9a4dc5f/c357ef4e705f049fc6a01125aad99a53/deep/0/visualization_v1.png)

*This first implementation took some time. The biggest problems where basically formatting
the data so that the site uses an aggregate sample because the original files are* **600mb** *or
larger. So I implemented `process_data.py` script to take care of that.*

### Version 2

![Version 2](https://www.evernote.com/shard/s14/sh/716fa520-b722-469a-bcfc-aacee3dfb4cc/682335413c42244825d66a7ceb6d3318/deep/0/visualization_v2.png)

*For the second version, the biggest changes based on feedback were:*
1. Include a legend for the first graph, the message was not clear.
2. Add chart titles and

### Version 3

*For the third version, the biggest changes based on feedback were:*
1. Fixed an issue with the bar chart including NaN values
2. Removed non-existing 2009 data from line chart

![Version 3](https://www.evernote.com/shard/s14/sh/a1ae0961-8fab-43f7-9598-a65499d063e4/f85453909fb4e653029eab0ac7d907af/deep/0/visualization_v3.png)


### Final version

*For the third version, the biggest changes based on feedback were:*
1. Fixed issue with some labels in first visualization being different sizes
2. Updated the labels in legend
3. Updated the x and y axis labels for both lower charts.

![Version 4](/img/visualization_v4.png)


### Final thoughts on design

After hearing the feedback and thinking about the message, I believe that these three
graphs are the right design choices.

Complementing the 24/7 grid graph with the bar chart helps clarify the message. The
feedback helped with important details like fixing bugs, clarifying the graphs with
titles, labels and legends, and making sure that all three graphs are consistent and
give complement each other.

I believe that the three charts clearly show that:
* The worst flight delays tend to happen on **Mondays, Thursdays and Sundays around 7pm**
* **7pm** is the hour of the day with highest flight delays on average
* Over the year, the highest flight delays occur during **summer** and **end of year**

#### Ideas for improvement
With more time, I would of loved to:
- [] re-aggregate data to be consistent between charts. All should be averages.
- [] add a dynamic grid table, with the ability to change the data for a given year
- [] add summary circle dashboard on top
- [x] change hours to be consistent on both graphs, to 24 hour format
- [] add information to legend to make COLORs clear. Cold - Hot
- [] make title and subtitle more specific. shorten and more precise.
- [] clarify what data is being used. just 2008
- [x] move December after November
- [] 2008 after 2007
- [] try out cycle plot for years graph
- [] add tooltip to big plot
- [] change DepDelay to a more understandable name
- [] reasons for picking bar and line
- [] add other feedback from Pixelapse
- [] lenght of delay and number of flights related?
- [] add comments in Index.html and main.css
- [] in main.js, explain commented out code or remove
- [] improve story


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

### Second interview
> Visualization. **Do you understand the message?** yes, a correlation is being made between the departure delays and the time of the delay with the day of the week, the hour and also the month of the year.
**What do you notice in the visualization?** departure delays have a tendency to happen more during the afternoon, there are months with highest delays (must be high demand of travel), also on Monday and weekends.
**What questions do you have about the data?** it will be interesting to correlate the data with the amount of demand for travel, given that delays must happen by the amount of passengers, bags, etc... that make all the process longer. Also months that have a high delay on flights are high demand months given holidays, so is it more that the airlines are overselling their flights that is causing the delays, or given the high amount of air traffic delay is prone to happen.
**What relationships do you notice?** high amount of delays happen on late hours of the day and holiday months.
**What do you think is the main takeaway from this visualization?** departure delays are mainly on late hours of the day and specially on Monday. Also there is a relationship year by year on the months where delays are higher so this data could help the passenger to plan ahead what hour of the day is best to travel and also to have in mind in which month delays are to be expected. Additionally is powerful information for airports to better organize air traffic and most of all for the airlines to plan ahead their flight schedule and if no major change can be made to preempt the delays they have to budget money to pay fees to passengers when delays affect their connecting flights or plans.
**Is there something you don’t understand in the graphic?** I got a little confused with the second graphic, given that the x-axis only says time and is being based in a 24 hour clock vs the previews chart that is based in a 12 hour clock.

### Third interview
> The description for the colors for delay bar for the graph Departure delay by hour of day and day of week could improve. I would put on the left, "No delay" and on the right "Delayed 12,042 minutes"
I like the design of each graph. The content now gives a great sight into what each graph is about.
One change that might be good is to have an abbreviation of each month (jan, feb, etc...) instead of numbers for the graph Departure delay time (minutes) by month
Overall, I see improvement with each version.

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
