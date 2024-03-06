import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from '../../Constants/constants';
import React from "react";

const ToggleButton = ({isActive, handleClick}) => {
  return (
    <div id="togglebutton" onClick={handleClick} className="bg-grayscale-900 rounded-xl w-[50px] h-[50px] absolute top-2 right-12 flex items-center justify-center cursor-pointer">
      <FontAwesomeIcon className="text-4xl text-grayscale-50" icon={isActive ? icons.faX : icons.faBars} />
    </div>
  );
};

export default ToggleButton;
