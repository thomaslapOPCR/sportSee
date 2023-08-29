/**
 *  @import React library for building user interface components.
 * @import style module for styling the UserInfos component.
 * @import PropsTypes.
 * */
import React from "react";

import style from "./UserInfo.module.scss";
import PropTypes from "prop-types";
/**
 * The UserInfos component for displaying user information.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {Object} props.Userdata - The user data for the info block.
 * @param {number} props.data - The data to display.
 * @param {JSX.Element} props.icon - The icon to display.
 * @param {string} props.unit - The unit of measurement.
 * @returns {JSX.Element}
 */
const UserInfos = (props) => {
  const { Userdata, data, icon, unit } = props; /*Destructuring props to get Userdata, data, icon, and unit.*/

  /* Rendering the component.*/
  return (
    <div className={style.container}>
      <div>
        {icon} {/* Rendering the icon component */}
      </div>
      <div className={style.dataContainer}>
        <h1 className={style.countText}>{data.toLocaleString("en-US", { minimumFractionDigits: 0 }) + " " + unit}</h1> {/* Displaying the count */}
        <p className={style.titleText}>{Userdata.title}</p> {/* Displaying the title */}
      </div>
    </div>
  );
};

UserInfos.propTypes = {
  Userdata: PropTypes.object.isRequired,
  data: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  unit: PropTypes.string.isRequired,
};

export default UserInfos;