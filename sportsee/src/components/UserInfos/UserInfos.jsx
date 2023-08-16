import React from "react";
import style from "./UserInfo.module.scss";
import { ReactComponent as CalorieIcon } from "./calories-icon.svg";
import { ReactComponent as ProteineIcon } from "./protein-icon.svg";
import { ReactComponent as GlucideIcon } from "./carbs-icon.svg";
import { ReactComponent as LipideIcon } from "./fat-icon.svg";

const UserInfos = (props) => {
  const { Userdata, data } = props; // Destructuring props to get Userdata and data.
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data; // Destructuring data object.

  // Mapping title strings to their respective icon components.
  const titleToIcon = {
    "Calories": <CalorieIcon />,
    "Proteines": <ProteineIcon />,
    "Glucides": <GlucideIcon />,
    "Lipides": <LipideIcon />,
  };

  // Getting the icon component based on Userdata's title, or using the Calorie icon as a default.
  const iconComponent = titleToIcon[Userdata.title] || <CalorieIcon />;

  // Mapping the title to a formatted count value based on the title's type.
  const count = {
    "Calories": calorieCount.toLocaleString("en-US", { minimumFractionDigits: 0 }) + "KCal",
    "Proteines": proteinCount + "g",
    "Glucides": carbohydrateCount + "g",
    "Lipides": lipidCount + "g",
  }[Userdata.title];

  // Rendering the component.
  return (
    <div className={style.container}>
      <div>
        {iconComponent} {/* Rendering the icon component */}
      </div>
      <div className={style.dataContainer}>
        <h1 className={style.countText}>{count}</h1> {/* Displaying the count */}
        <p className={style.titleText}>{Userdata.title}</p> {/* Displaying the title */}
      </div>
    </div>
  );
};

export default UserInfos;