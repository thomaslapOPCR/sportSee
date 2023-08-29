/**
 * @import {Component} LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Rectangle - Components from Recharts library.
 * @import {Module} style - The module for styling the Sessions component.
 * @import PropsTypes.
 */
import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for prop type validation
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
} from "recharts";
import style from "./Session.module.scss";

/**
 * The Sessions component for displaying the average duration of sessions.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {Array} props.data - The data containing session information.
 * @returns {JSX.Element}
 */
function Sessions({ data }) {
  /**
   * CustomizedTooltip component for displaying session length information.
   *
   * @component
   * @param {Object} props - The component's props.
   * @param {boolean} props.active - Indicator if tooltip is active.
   * @param {Array} props.payload - Data payload for tooltip.
   * @returns {JSX.Element|null}
   */
  function CustomizedTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <div className={style.customInfo}>
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  }

  /**
   * CustomizedCursor component for rendering cursor on the chart.
   *
   * @component
   * @param {Object} props - The component's props.
   * @param {Array} props.points - Data points for cursor.
   * @returns {JSX.Element}
   */
  function CustomizedCursor({ points }) {
    return <Rectangle fill="black" opacity={0.1} x={points[1].x} width={500} height={300} />;
  }

  return (
    <section className={style.container}>
      <div className={style.title}>Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%" padding={0}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: -10 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            padding={{ left: 20, right: 15 }}
            tick={false}
          />
          <YAxis
            hide={true}
            domain={["dataMin-50", "dataMax+50"]}
            padding={{ top: 10, bottom: -20 }}
          />
          <Tooltip content={<CustomizedTooltip />} cursor={<CustomizedCursor />} />

          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#fff"
            dot={false}
            activeDot={{
              stroke: "white",
              strokeOpacity: 0.2,
              fill: "white",
              strokeWidth: 15,
              r: 5,
            }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className={style.dayName}>
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

/** PropTypes for type checking and validation */
Sessions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sessions;