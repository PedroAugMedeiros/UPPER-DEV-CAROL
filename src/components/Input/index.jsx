import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",

      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,

      ...restProps
    },
    ref
  ) => {
    return (
      <label className={`${className} undefined   `}>
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,

  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
};

export { Input };
