import {
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import style from "./Activity.module.scss";


// Activity component that displays a bar chart showing daily activity data.
const Activity = ({ data }) => {
  // CustomTooltip component to display tooltips on the chart.
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className={style.custom}>
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} kCal`}</p>
        </div>
      );
    }
    return null;
  };

  // Function to format the X-axis tick labels.
  const formatXAxis = (index) => {
    return index + 1;
  };

  return (
    <section className={style.container}>
      <div className={style.ActivityLegend}>
        {/* Title and legend for the activity chart */}
        <div className={style.title}>Activité quotidienne</div>
        <div className={style.circles}>
          <div className={style.circle}>
            <div className={style.black}></div>
            <p>Poids (kg)</p>
          </div>
          <div className={style.circle}>
            <div className={style.red}></div>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          margin={{
            top: 30,
            right: 50,
            left: 50,
            bottom: 10,
          }}
          barCategoryGap="40%" // Gap between categories
          barGap={1} // Gap between bars within a category
          data={data} // Data for the bar chart
        >
          <CartesianGrid
            strokeDasharray="2 4" // Style for grid lines
            vertical={false} // Display horizontal grid lines
            stroke="#dedede" // Grid line color
          />
          <XAxis
            tickFormatter={formatXAxis} // Custom formatting for X-axis ticks
            tick={{ fill: "#9b9eac" }} // Styling for tick labels
            tickLine={false} // Hide tick lines
            stroke="#DEDEDE" // X-axis color
            padding={{ left: -47, right: -47 }} // Padding for the axis
            tickSize="25" // Size of tick marks
          />

          <YAxis yAxisId="left" orientation="left" hide={true} /> {/* Left Y-axis (hidden) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={["dataMin-1", "dataMax+1"]} // Adjusted domain for Y-axis
            axisLine={false} // Hide axis line
            tickLine={false} // Hide tick lines
            tickSize="50" // Size of tick marks
            tickCount={4} // Number of ticks
          />

          <Tooltip
            position={{ y: 0 }} // Position of tooltip
            cursor={{
              fill: "#C4C4C4", // Cursor color
              fillOpacity: "0.4", // Cursor opacity
            }}
            content={<CustomTooltip />} // Custom tooltip component
          />

          {/* Bar components representing data */}
          <Bar
            yAxisId="right" // Using the right Y-axis
            dataKey="kilogram" // Data key for the weight data
            fill="black" // Bar fill color for weight
            radius={[50, 50, 0, 0]} // Rounded corners for the bar
            maxBarSize={10} // Maximum size of bars
          />
          <Bar
            yAxisId="left" // Using the left Y-axis
            dataKey="calories" // Data key for the calories data
            fill="#E60000" // Bar fill color for calories
            radius={[50, 50, 0, 0]} // Rounded corners for the bar
            maxBarSize={10} // Maximum size of bars
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Activity;