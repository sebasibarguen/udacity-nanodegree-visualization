

import pandas as pd
import numpy as np



def concat(*args):
    strs = [str(arg) for arg in args if not pd.isnull(arg)]
    return '-'.join(strs) if strs else np.nan
np_concat = np.vectorize(concat)


def hours(t):
    t = str(t).split(".")[0]
    if len(t) == 3:
        return t[:1]
    else:
        return t[:2]

data_files = ["2004", "2005", "2006", "2007", "2008"]
def group_data_by(group=["Date"]):

    grouped_list = []

    # Read each file independently
    for file in data_files:
        print "Starting to read: {}".format(file)

        # read file to dataframe and add a column for Datetime
        data = pd.read_csv("data/original/{}.csv".format(file))
        data["Time"] = data["DepTime"].map(hours)
        data["DateTime"] = np_concat(data["Year"], data["Month"], data["DayofMonth"], data["Time"])

        grouped_data = data.groupby(group).sum()
        grouped_list.append(grouped_data)

    # To append all years into a single DT
    all_data = grouped_list.pop(0)
    for year in grouped_list:
        all_data.append(year)


    # Save to new CSV
    all_data.to_csv("data/2004-2008-{0}.csv".format(group[0]))

group_data_by(group=["DateTime"])
