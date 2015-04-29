# Data Visualization - US Flight Delays

## Summary

By looking at the [Rita flight dataset](http://stat-computing.org/dataexpo/2009/the-data.html) for 2008, this visualization explores the relationship between **average flight departure delay time** and the hour of day. This also leads us to explore the relationship between delay time and other periods of time, like day of week and months of the year.

I suggest you first [view the visualization](http://sebasibarguen.github.io/udacity-nanodegree-visualization/), and then read the full design process.

## Design


### Bar Chart
After exploring the data, trying out different chart types, playing with the narrative and getting feedback, the best way to communicate the main point was by a simple bar chart. The bar chart shows the average delay time for departing flights as seen by the hours of a day. It's a clear design choice because it easily helps the viewer compare the delay times by the size or height of the bar. Also given it's widespread usage, a viewer is already trained to interpreting these types of plots.

> The process of getting feedback was a good lesson on *less is more*, and to first
and foremost, focus on the main message of the visualization.

That's why I chose the bar chart over the more fancy grid visualization as the main plot. The bar chart simply communicates the message faster and clearer.

Additional design choices around the bar chart were first to add focus to the hours with highest average delay times, which is the main point of the visualization. I accomplished this by changing the *color* of the bars of interest. Then, to improve the viewers interaction, I also fixed the *tooltip* message to just include the exact amount of minutes. Again, I found out that less is more, a cluttered tooltip hurts more than helps the viewer.


| Visual encodings |        Variable |
-------------------|-----------------|
| distance x | hour of day |
| distance y | average delay time |
| color hue  | high/low average delay time |


### Grid Visualization
After the viewer get's a feel of the delay time between hours of the day, a next natural step is to present them with the grid visualization which combines the bar chart variables and adds another, days of the week.

For the grid visualization, I decided to use a calendar grid comparing how flight
delays vary depending on the hour of day and day of week. The inspiration came from a [Trulia graph](http://www.trulia.com/vis/tru247/) depicting the time of day and day of week most people go house hunting. The idea behind the design is to use hue-colors as a way to communicate the amount of delay time, hotter colors representing longer delays while cooler colors shorter. The reasons for choosing the use of colors and a grid chart is that in just one graph we are able to group the relationship between  three variables and make it aesthetically pleasing way. It permits us to look at relationships like: **what's the worst day-time of the week regarding flight time delays?** **Are time delays worst on early Tuesdays or late Fridays?** What I found out based on feedback is that this visualization is not so easy to digest, and the color coding is far from clear. To improve these concerns, I **changed the color coding from multiple color-hues to different intensities of a single-hue**. This definitely helped interpret the grid better, there is simply less room for the viewer to mis-understand. Also, the tooltip is a really **helpful interaction** for the same reason, the user can explore the data much more freely and get concrete values instead of guessing what the 3'rd level of color intensity means.


| Visual encodings | Variable |
--------------|------------------------|
| distance x | hour of day |
| distance y | day of week |
| color hue  | flight delay time |


The grid visualization confirms the message the bar charts first gives, and it also tells us something interesting:

> there is not much difference in average delay times between days of week


### Line Chart
The next chart to be explored is a line chart, which shows the average delay times by month of year. A line chart was chosen to present this data so as to show the time relationship month by month. After exploring multiple years, the month variations stays roughly the same, and so it appears to be seasonal. To give focus on the months with highest delay times, I decided to change the color of the months with highest value, which turns out to be February (not quite sure why), June through August (summer vacations) and December (holiday).

| Visual encodings | Variable |
-------------------|------------------|
| distance x | month of year |
| distance y | average delay time |
| color hue  | high/low average delay time |

### Layout and Narrative
The layout changed a lot based on the narrative of the visualization. You can appreciate this in the sketches below. The final layout was chosen because it was the one which best communicated the core message. I chose an *author driven* approach to explore the visualization and tried to follow a natural flow of curiosity and practicality (usefulness) of the information. By these principles, the bar chart came as clear first pick to present the most information in a fast and clear manner.

#### Sketch
![Sketch](/img/visualization_sketch.JPG)

*This is the first sketch I did to get an overview idea of the visualizations I was planning to use.*

#### Version 1

![Version 1](https://www.evernote.com/shard/s14/sh/65887338-ebad-49cb-b477-5796b9a4dc5f/c357ef4e705f049fc6a01125aad99a53/deep/0/visualization_v1.png)

*This first implementation took some time. The biggest problems where basically formatting the data so that the site uses an aggregate sample because the original files are* **600mb** *or larger. So I implemented `process_data.py` script to take care of that.*

#### Version 2

![Version 2](https://www.evernote.com/shard/s14/sh/a1ae0961-8fab-43f7-9598-a65499d063e4/f85453909fb4e653029eab0ac7d907af/deep/0/visualization_v2.png)

*For the second version, the biggest changes based on feedback were*:

1. Include a legend for the first graph, the message was not clear.
2. Add chart titles
3. Fixed an issue with the bar chart including NaN values
4. Removed non-existing 2009 data from line chart

#### Version 3

*For the third version, the biggest changes based on feedback were*:

1. Fixed issue with some labels in first visualization being different sizes
2. Updated the labels in legend
3. Updated the x and y axis labels for both lower charts.

![Version 4](/img/visualization_v4.png)


#### Version 4
*For the fourth version, there were some big changes based on Udacity coach feedback*:

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
![Version 5](/img/visualization_v5_2.png)

### Final thoughts on design

After hearing the feedback and thinking about the message, I believe that these three graphs are the right design choices.

Getting good feedback is king! It is the only way to validate that the visualization is accomplishing it's purpose and communicating the message as intended. A good communication principle tells us that the message that really matters is the one being received by the viewer in this case, not the one we believe we are sending.

> After multiple iterations, I found out that keeping focus on the main point and checking if the feedback was consistent with the objective is what design is all about.

To that point, the bar chart is the one that most clearly communicates the message. After the viewer 'gets' educated by the first graph, we can take them to a more elaborate plot, the grid visualization. Finally, complementing the message we present the line plot to finish the delay-time period exploration.

I believe that the three charts clearly show:
* The worst flight delays tend to happen between **11pm and 3am**
* **December holidays** and **summer** have a huge peak in flight delays
* There is not much difference between days of the week

*An important note, in the descriptions used in the visualization, people seem to prefer the 12-hour clock format, even though the plots use a 24-hour clock format. This inconsistency is quite interesting. I suspect it's due to the fact that when reading we are trained to rapidly interpret the 12-hour format, we are more accustomed to it. But when analyzing a graph, we might prefer an increasing axis labels, as we expect that from plots. It appears that there are two different expectations for the clock format depending on **context**.*

## Feedback
To validate and review my visualizations, I conducted 4 interviews. Most were completed through email and one using [Pixelapse](pixelapse.com). Below you can find the comments. I also included part of the Udacity coach's feedback.

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

###  Udacity coach
>You should work further on the data and your use of it in order to make a visualization that is easy to understand. The way that delays have been aggregated in each of the three plots seems to be different and in each case it is difficult to interpret. The note stating the aggregation (above the legend) is very small and hard to read. It is not very easy to understand what 12,000 minutes of delays means in practice. It is currently not possible to understand whether large total delays are caused by long delays or simply many flights in total.
It would be better to show the average delay per flight​. (Don’t forget to look carefully at which average would be best for this - would a mean or a median be more appropriate?) This would make the graphic easier to relate to a real-life situation. It also disentangles the effect of the number of flights at a given time (hour/day of week/month of year) from the lengths of the delays at that time. This could lead to an interesting investigation of whether delays occur more often at busy times of day. Depending on your findings, this could make a more compelling story.

## For the future:

- [ ] add a dynamic grid table, with the ability to change the data for a given year
- [ ] add summary circle dashboard on top

## Resources

- [Trulia 247 visualization](http://www.trulia.com/vis/tru247/)
- [D3.JS Documentation](d3js.org)
- [Dimple.JS Documentation](http://dimplejs.org/)
- [Bootstrap for styling](http://getbootstrap.com)

## Files

- To process the original RITA files, I built the `process_data.py` script.
- The data used is `data/2008-DateTime.csv` via D3.js.

http://sebasibarguen.github.io/udacity-nanodegree-visualization/
