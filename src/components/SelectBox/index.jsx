import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = { options },
      isSearchable = false,
      isMulti = false,
      indicator,

      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <select className="bg-transparent border-none">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
};

export { SelectBox };
