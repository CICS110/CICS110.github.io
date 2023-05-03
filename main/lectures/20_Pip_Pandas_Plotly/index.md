# Lec 20 Pip Pandas Plotly

## Assignment Updates

Stuff due soon:

- HW7 Due 5/15
- Capstone Project Presentations 5/16 and 5/17
- Quiz due Thursday

## Slides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PowerPoint } from '@site/src/components/PowerPoint'

<Tabs>
  <TabItem value="Section 1, 2, 3, 4, 5, 6" label="Section 1, 2, 3, 4, 5, 6" default>
    <PowerPoint lec_src={require('./Lecture_20.pptx').default}/>
  </TabItem>
</Tabs>

## Resources

### StudentsPerformance.csv Download:
Download: [StudentsPerformance.csv](StudentsPerformance.csv)

## Notes:

### Pip

- Pip is a package manager for Python
    - A package manager is a tool that automates the process of installing, updating, and removing packages
    - A package is a collection of code files that are bundled together (e.g., a library or module)
- Pip is included with Python 3.4 and above
    - To check if you have pip installed, open a terminal and type `pip --version`
    - May need to type `pip3 --version` (if you have both Python 2 and 3 installed). If this is the case, you will need to use `pip3` instead of `pip` for the rest commands
- To install a package, open a terminal and type `pip install <package name>`
    - This will download the package from the Python Package Index (PyPI) and install it on your computer
    - To search for a package, go to [https://pypi.org/](https://pypi.org/) and type the name of the package in the search bar
        - It will show you the package name, a short description, the latest version, and the command to install it
    - To see a list of all installed packages, type `pip list`. It may be a long list, but it's alphabetical so you can scroll through it to find the package you're looking for
    - Let's install pandas and plotly: `pip install pandas plotly`


### Pandas

- Panda is a data analysis library for data structured in tables (like csv files!)
    - It has a lot of built-in functions for manipulating and analyzing data
    - Official documentation: [https://pandas.pydata.org/pandas-docs/stable/](https://pandas.pydata.org/pandas-docs/stable/)
- To use pandas, we need to import it into our Python script
    - `import pandas as pd`
    - The `as pd` part is optional, but it's a common convention to use `pd` as the alias for pandas
- Pandas has two main data structures: Series and DataFrame
    - A Series is a one-dimensional array of indexed data
    - A DataFrame is a two-dimensional array of indexed data
        - It's like a table in a spreadsheet
        - Each row is a record (or observation)
        - Each column is a variable (or feature)
- Let's load a csv file into a DataFrame
    - On the website is a csv file called `StudentsPerformance.csv`
        - It contains data about students' test scores [(Info about the file)](#studentperformancecsv)
        - Download the file and save it in the same folder as your Python script
    - To load the csv file into a DataFrame, use the `read_csv()` function
        - `df = pd.read_csv('StudentsPerformance.csv')` (after importing pandas)
        - The `df` variable is a DataFrame object (it's a table of data)
    - To see the first 5 rows of the DataFrame, use the `head()` function
        - `print(df.head())` (or `df.head(12)` to see the first 12 rows)
- Now, let's analyze the data
    - To start, let's describe the data
        - `print(df.describe())`
        - This will give us some basic statistics about the data
        - We can see the count, mean, standard deviation, min, max, and the quartiles for each column
            - The 25% is a value such that 25% of the data is less than that value. This is also called the first quartile (Q1).
    - We can get a single column from the DataFrame using the column name
        - `print(df['math score'])`
        - This will print the math score column
        - We can also get multiple columns by passing in a list of column names
            - `print(df[['math score', 'reading score']])`
    - To get the mean of a column, use the `mean()` function
        - WARNING: This will only work on numeric columns (can't get the mean of a column of strings)
        - `print(df['math score'].mean())`
        - This will print the mean of the math score column
        - We can also get the mean of multiple columns
            - `print(df[['math score', 'reading score']].mean())`
        - Other methods include: `median()`, `mode()`, `min()`, `max()`, `std()`, `var()`, `sum()`, `count()`
            - Feel free to try them out or look them up online
    - We can also filter the rows
        - We can get all the rows where the math score is greater than 90
            - `greater_than_90_df = df[df['math score'] > 90]`
            - This says: Get all rows where the `math score` column is greater than 90
        - We can get get all rows where gender if female
            - `female_df = df[df['gender'] == "female"]`
            - This says: Get all rows where the `gender` column's value is equal to the string `female`

### Plotly

- Finally, let's visualize the data using Plotly Express
    - Plotly is a data visualization library
    - It has a lot of built-in functions for creating charts and graphs
    - Official documentation: [https://plot.ly/python/](https://plot.ly/python/) (it's a bit confusing, but it has a lot of examples)
- To use Plotly, we need to import it into our Python script
    - `import plotly.express as px`
    - The `as px` part is optional, but it's a common convention to use `px` as the alias for plotly.express
- Plotly creates charts and graphs using DataFrame objects
    - This is why we needed to use pandas to load the csv file into a DataFrame
- Let's create a histogram chart of the math scores
    - Plotly has a function called `histogram()` that creates a histogram chart
        - It takes:
            - `data_frame`: The DataFrame object (with the data to plot)
            - `x`: The column name for the x-axis
    - Example: `fig = px.histogram(data_frame=df, x='math score')`
    - This will create a histogram chart of the math scores
- After creating the chart, we need to display it
    - To display the chart, use the `show()` function
    - Example: `fig.show()`
    - It will open a new tab in your browser to display the chart. This will take a few seconds to load.
    - Full Example:
        ```py
        import pandas as pd
        import plotly.express as px

        # Load the data
        df = pd.read_csv('StudentsPerformance.csv')

        # Create the chart
        fig = px.histogram(data_frame=df, x='math score')

        # Show the chart
        fig.show()
        ```
- We can do the same thing for the reading scores and writing scores:
    - `fig = px.histogram(data_frame=df, x='reading score')`
    - `fig = px.histogram(data_frame=df, x='writing score')`
- We can use different colors to represent different gender's scores
    - Add the keyword parameter `color="gender"` to the `px.histogram()` function to set the colors based on the values of the `gender` column
        - There are 2 values (`"male"` and `"female"`) so there will be 2 colors
        - When displaying the chart, it will also show a legend with the colors and the values they represent
        - Clicking the color in the legend will hide/show the data for that value

### Conclusion

Pip: A package manager for Python. Let's you install, update, and remove packages (e.g., libraries and modules)

Pandas: A data analysis library for data structured in tables (like csv files!). It has a lot of built-in functions for manipulating and analyzing data.

Plotly: A data visualization library. It has a lot of built-in functions for creating charts and graphs.

You can now use pandas to load csv files into DataFrames and analyze the data. You can also use plotly to create charts and graphs of the data.


### StudentPerformance.csv Notes

Download: [StudentsPerformance.csv](StudentsPerformance.csv)
- This is a csv file containing data about students' test scores
    - Source: [https://www.kaggle.com/datasets/whenamancodes/students-performance-in-exams](https://www.kaggle.com/datasets/whenamancodes/students-performance-in-exams)
    - This is from Kaggle, a website for data science and machine learning. It has a lot of datasets that you can use for practice
    - I think this dataset was generated (not real data) based on the discussion(s) associated with the dataset
- The file contains the following columns (Be aware that some column names have spaces in them):
    - `gender` (String): "male" or "female" based on the student's gender
    - `race/ethnicity` (String): A string containing the words "group" and a letter (e.g., "group A", "group B", etc.) They correspond to different race/ethnicity groups 
    - `parental level of education` (String): The student's parent's level of education (e.g., "some high school", "bachelor's degree", "associate's degree", etc.)
    - `lunch` (String): Whether the student gets free/reduced lunch or not. "standard" means they don't get free/reduced lunch, "free/reduced" means they do get free/reduced lunch.
    - `test preparation course` (String): Whether the student completed a test preparation course or not. "none" means they didn't complete a test preparation course, "completed" means they did complete a test preparation course.
    - `math score` (Integer): The student's math score (out of 100) on an exam
    - `reading score` (Integer): The student's reading score (out of 100) on an exam
    - `writing score` (Integer): The student's writing score (out of 100) on an exam