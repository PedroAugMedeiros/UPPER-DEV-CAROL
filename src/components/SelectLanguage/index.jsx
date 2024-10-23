import React from "react";

import PropTypes from "prop-types";

const Select = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,

      ...restProps
    },
    ref
  ) => {
    return (
      <select className="flex w-[15%] gap-0 justify-center items-center px p-2 rounded-[20px]  bg-blue_gray-100 hover:bg-[#a8a4a4] hover:cursor-pointer border-solid border-gray-900_01 md:w-full gap-5">
        {options.map((option) => (
          <option
            className="pl-0 ml-0 w-[130%]"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
};

export { Select };
