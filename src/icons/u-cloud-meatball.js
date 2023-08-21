import React from 'react';
import PropTypes from 'prop-types';

const UCloudMeatball = props => {
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
      <path d="M14.5 15.92h-.77l.39-.67a1.003 1.003 0 00-1.74-1l-.38.67-.38-.67a1.003 1.003 0 10-1.74 1l.39.67H9.5a1 1 0 100 2h.77l-.39.66a1.003 1.003 0 101.74 1l.38-.66.38.66a1.004 1.004 0 001.74-1l-.39-.66h.77a1 1 0 000-2zm3.92-7.79A7 7 0 005.06 10 4 4 0 002 13.92a4 4 0 003.34 3.93h.16a1.003 1.003 0 00.16-2 2 2 0 01-1.66-2 2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66 3 3 0 01.62 5.72.999.999 0 00-.064 1.892.999.999 0 00.804-.042 5 5 0 00-.45-9.41v.07z"></path>
    </svg>
  );
};

UCloudMeatball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudMeatball.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudMeatball;
