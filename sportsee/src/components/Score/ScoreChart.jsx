import React from "react";
import style from "./Score.module.scss";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Score component that displays a pie chart representing the user's score progress.
const Score = ({ data }) => {
  const todayScore = data; // Extracting the user's score for the day.
  const scorePerCent = todayScore * 100; // Calculating the score percentage.
  const rest = 100 - scorePerCent; // Calculating the remaining percentage.

  // Array representing the data for the pie chart.
  const score = [
    { name: "objectif", value: scorePerCent, fillColor: `red` }, // Achieved score segment
    { name: "objectif Restant", value: rest, fillColor: "white" }, // Remaining progress segment
  ];
  const scoreLabel = score[0].value + "%"; // Preparing the score label for display.

  const data0 = [{ name: "Score", value: 100 }]; // Dummy data for the inner circle of the pie chart.
  return (
    <section className={style.container}>
      <div className={style.ScoreTitle}>Score</div> {/* Title for the score section */}

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* Inner circle to create the doughnut chart effect */}
          <Pie
            data={data0}
            dataKey="Base"
            innerRadius={0}
            outerRadius={80}
            fill="white"
            stroke="none"
          />
          {/* Main pie chart showing the score segments */}
          <Pie
            dataKey="value"
            data={score}
            innerRadius={"60%"}
            outerRadius={"70%"}
            startAngle={90}
            endAngle={450}
          >
            {/* Rendering cells for each segment of the pie chart */}
            {score.map((base, index) => (
              <Cell
                key={`progresse-${index}`}
                fill={base.fillColor}
                cornerRadius="50%" // Applying rounded corners to cells
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className={style.ScoreLegend}>
        <p className={style.scoreLabel}>{scoreLabel}</p> {/* Displaying the score label */}
        <p className={style.scoreText}>
          de votre <br /> objectif {/* Displaying additional score text */}
        </p>
      </div>
    </section>
  );
}

export default Score;