import React from 'react';
import PropTypes from 'prop-types';

const UCancel = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M21.77 11.36l-5-6A1 1 0 0016 5H5a3 3 0 00-3 3v8a3 3 0 003 3h11a1.001 1.001 0 00.77-.36l5-6a1 1 0 000-1.28zM15.53 17H5a1 1 0 01-1-1V8a1 1 0 011-1h10.53l4.17 5-4.17 5zm-2.82-7.71a1 1 0 00-1.42 0L10 10.59l-1.29-1.3a1.004 1.004 0 00-1.42 1.42L8.59 12l-1.3 1.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l1.29-1.3 1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L11.41 12l1.3-1.29a1.002 1.002 0 000-1.42z"></path>
    </svg>
  );
};

UCancel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCancel.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCancel;
