# Data Visualization - US Flight Delays

## Summary

By looking at the [Rita Flight dataset](http://stat-computing.org/dataexpo/2009/the-data.html), this visualization explores the relationship between **average flight departure delay time** and time of the day. This question leads us to ask,
does average delay time vary between months of the year?

[View the visualization](http://sebasibarguen.github.io/udacity-nanodegree-visualization/)

## Design


### Bar Chart
After exploring the data, trying out different chart types and getting feedback, the
best way to communicate the main point was by a simple bar chart. The bar chart shows
the average delay time for departing flights as seen by the hours of a day. It's a clear design choice
because it easily helps compare the delay times by the size or height of the bar. Also given it's
widespread usage, a viewer is already trained to interpreting these types of plots.

> The process of getting feedback was a good lesson on *less is more*, and to first
and foremost, focus on the main message of the visualization.

That's why I chose the bar chart over the more fancy grid visualization. The bar chart simply communicates the message faster and clearer.

Additional design choices around the bar chart were first
to add focus to the hours with highest average delay times, which is the main point of
the visualization. I accomplished this by changing the *color* of the bars of interest.
Then, to improve the viewers interaction, I also fixed the *tooltip* message to just include the exact
amount of minutes. Again, I found out that less is more, a cluttered tooltip hurts more than helps the viewer.


| Visual encodings |        Variable |
-------------------|-----------------|
| distance x | hour of day |
| distance y | average delay time |
| color hue  | high/low average delay time |

### Line Chart
The next chart to be explored is a line chart, which shows the average delay times by month of year. A line chart
was chosen to present this data so as to show the time relationship month by month. After exploring multiple years, the month variations stays roughly the same, and so it appears to be seasonal. To give focus on this point, I decided to change the color of the months with highest value, which turns out to be February, June through August and December.

| Visual encodings |        Variable |
-------------------|------------------|
| distance x | month of year |
| distance y | average delay time |
| color hue  | high/low average delay time |

### Grid Visualization
For the grid visualization, I decided to use a calendar grid comparing how flight
delays vary depending on the hour of day and day of week. The inspiration came from a [Trulia
graph](http://www.trulia.com/vis/tru247/) depicting the time of day and day of week most people go house hunting. The idea
behind the design is to use hue-colors as a way to communicate the amount of delay time,
hotter colors representing longer delays while cooler colors shorter. The reasons for choosing
the use of colors and a grid chart is that in just one graph we are able to group the relationship between
three variables and make it aesthetically pleasing way. It permits us to look at relationships like:
**what's the worst day-time of the week regarding flight time delays?** **Are time delays worst
on early Tuesdays or late Fridays?** What I found out based on feedback is that this
visualization is not so easy to digest, and the color coding is far from clear. To improve these concerns, I changed the color coding from multiple color-hues to different intensities of a single-hue. This definitely
helped interpret the grid better, there is simply less room for the viewer to mis-understand.


| Visual encodings for the grid visualization |
--------------------------------------
| distance x | hour of day |
| distance y | day of week |
| color hue  | flight delay time |


The grid visualization confirms the message the bar charts first gives, and it also tells us something interesting,
**there is not much difference in average delay times between days of week**.

### Layout and Narrative
The layout changed a lot based on the narrative of the visualization. You can appreciate this in the sketches below.
The final layout was chosen because it was the one which best communicated the core message, which is that average flight delays are worst between 11pm and 3am, and December has the highest delay times of the year.

#### Sketch
![Sketch](/img/visualization_sketch.JPG)

*This is the first sketch I did to get an overview idea of the visualizations I was
planning to use.*

#### Version 1

![Version 1](https://www.evernote.com/shard/s14/sh/65887338-ebad-49cb-b477-5796b9a4dc5f/c357ef4e705f049fc6a01125aad99a53/deep/0/visualization_v1.png)

*This first implementation took some time. The biggest problems where basically formatting
the data so that the site uses an aggregate sample because the original files are* **600mb** *or
larger. So I implemented `process_data.py` script to take care of that.*

#### Version 2

![Version 2](https://www.evernote.com/shard/s14/sh/716fa520-b722-469a-bcfc-aacee3dfb4cc/682335413c42244825d66a7ceb6d3318/deep/0/visualization_v2.png)

*For the second version, the biggest changes based on feedback were:*
1. Include a legend for the first graph, the message was not clear.
2. Add chart titles and

#### Version 3

*For the third version, the biggest changes based on feedback were:*
1. Fixed an issue with the bar chart including NaN values
2. Removed non-existing 2009 data from line chart

![Version 3](https://www.evernote.com/shard/s14/sh/a1ae0961-8fab-43f7-9598-a65499d063e4/f85453909fb4e653029eab0ac7d907af/deep/0/visualization_v3.png)


#### Version 4

*For the fourth version, the biggest changes based on feedback were:*
1. Fixed issue with some labels in first visualization being different sizes
2. Updated the labels in legend
3. Updated the x and y axis labels for both lower charts.

![Version 4](/img/visualization_v4.png)


#### Version 5
*For the fifth version, there were some big changes based on Udacity coach feedback:*
1. General improvement of main point, story and structure
2. All charts are using same dataset for 2008 and using **average delay** time
3. Changed hours on grid visualization to be consistent with other graph, 24 hour format
4. Improved titles and subtitles
5. In line chart, moved December after November
6. Added tooltip to grid visualization and better explained color coding
7. Added comments to HTML and CSS and explained commented out code.
8. Added Pixelapse feedback (number 4)
9. Improved pop overs for bar and line chart
10. Changed color palette of grid visualization

![Version 5](/img/visualization_v5.png)

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


## For the future:
- [ ] add a dynamic grid table, with the ability to change the data for a given year
- [ ] add summary circle dashboard on top

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

### Fourth interview (pixelapse)
> When i opened the project, what i saw at first was the title about flight delays in US. Then i skip some information and start trying to understand what graphics are saying. I started with the colorful square based graphic. I understood pretty well it´s information. Then with the blue bars i didn’t understand quickly so i skip it. By this time i started to read a little bit more other texts than could help me to read the graphics. Then i watched the third chart where i started to ask if there are a pattern of this data year by year. I saw that each year this numbers increased. finally i returned to read the second chart that in this time was more easy to understand.
Yes, after i read all information it was clear.
In first place that the first and second chart are very related. and for conclusion that there is a big amount of time lost in some way and this phenomenon happens depending on the time, day or month.
The question i had was that if this situation is getting better or worse thru time.
between the first and second chart.
I didn’t understand why in the first chart the hour 1a is bigger than the others.
No, after i read all information it was clear. It took me like 10min watching all the information in my phone.

## Resources

- [Trulia 247 visualization](http://www.trulia.com/vis/tru247/)
- [D3.JS Documentation](d3js.org)
- [Dimple.JS Documentation](http://dimplejs.org/)
- [Bootstrap for styling](http://getbootstrap.com)

## Files

- To process the original RITA files, I built the `process_data.py` script.
- The data used is `data/2008-DateTime.csv` via D3.js.

http://sebasibarguen.github.io/udacity-nanodegree-visualization/
