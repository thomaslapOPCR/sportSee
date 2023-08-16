import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from "recharts";
import style from "./Performance.module.scss";
import { translateName } from "../../services/Utils.js";

// Performance component that displays a radar chart to visualize performance data.
const Performance = ({ data, kind }) => {
  // Mapping and transforming data items to include translated names based on the kind.
  const userdata = data.map((item) => ({
    ...item,
    name: translateName(kind[item.kind]), // Assuming there is a 'translateName' function
  }));

  // Reordering data items to change the order of categories.
  const reorderedData = [...userdata].reverse();

  return (
    <section className={style.container}>
      <ResponsiveContainer width="100%" height="100%">
        {/* RadarChart from recharts library */}
        <RadarChart cx="50%" cy="50%" innerRadius="5%" outerRadius="60%" data={reorderedData}>
          <PolarGrid radialLines={false} /> {/* Hiding radial grid lines */}
          <PolarAngleAxis
            dataKey="name" // Data key for the radar chart
            tickLine={false} // Hiding tick lines
            tick={{ fontSize: 12, fontWeight: 500 }} // Styling for tick labels
            stroke="white" // Stroke color for tick labels
            dy={5} // Vertical offset for tick labels
          />
          <Tooltip labelFormatter={item => translateName(kind[item])} /> {/* Tooltip configuration */}
          <Radar
            name="Performance" // Name for the radar series
            dataKey="value" // Data key for the radar series
            fill="#e60000" // Fill color for the radar area
            fillOpacity={0.7} // Fill opacity for the radar area
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Performance;