import React from 'react';
import PropTypes from 'prop-types';

const UTimesSquare = props => {
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
      <path d="M15.71 8.29a1 1 0 00-1.42 0L12 10.59l-2.29-2.3a1.004 1.004 0 00-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l2.29-2.3 2.29 2.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095L13.41 12l2.3-2.29a1 1 0 000-1.42zM19 2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v14z"></path>
    </svg>
  );
};

UTimesSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTimesSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTimesSquare;