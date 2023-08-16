import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import style from "./Session.module.scss";


// CustomTooltip component that displays information when hovering over data points.
const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className={style.customInfo}>
        <p> {`${payload[0].value} `}min</p> {/* Displaying the session length */}
      </div>
    );
  }

  return null;
};

// Sessions component that displays a line chart of session duration.
function Sessions({ data }) {
  return (
    <section className={style.container}>
      <div className={style.title}>Durée moyenne des sessions</div> {/* Chart title */}
      <ResponsiveContainer width="100%" height="100%" padding={0}>
        {/* LineChart component from Recharts */}
        <LineChart
          data={data} // Data for the chart
          margin={{ top: 0, right: 0, left: 0, bottom: -10 }} // Margins for the chart
        >
          <XAxis
            dataKey="day" // X-axis data key
            axisLine={false} // Hiding the axis line
            padding={{ left: 20, right: 15 }} // Padding for the axis
            tick={false} // Hiding axis ticks
          />
          <YAxis
            hide={true} // Hiding the Y-axis
            domain={["dataMin-50", "dataMax+50"]} // Domain for the Y-axis
            padding={{ top: 10, bottom: -20 }} // Padding for the axis
          />
          <Tooltip
            content={<CustomTooltip data={data} />} // Custom tooltip for data points
            cursor={{
              stroke: "black",
              strokeOpacity: 0.09,
              strokeWidth: 60,
            }} // Cursor configuration
          />
          <Line
            type="natural" // Type of line interpolation
            dataKey="sessionLength" // Data key for session length
            stroke="#fff" // Line stroke color
            dot={false} // Disabling dots on data points
            activeDot={{
              stroke: "white",
              strokeOpacity: 0.2,
              fill: "white",
              strokeWidth: 15,
              r: 5,
            }} // Styling for active data points
            strokeWidth={2} // Stroke width for the line
          />
        </LineChart>
      </ResponsiveContainer>
      <div className={style.dayName}> {/* Displaying day names */}
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
    </section>
  );
}

export default Sessions;