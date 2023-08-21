import React from 'react';
import PropTypes from 'prop-types';

const UBatteryEmpty = props => {
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
      <path d="M17 7H4a2 2 0 00-2 2v6a2 2 0 002 2h13a2 2 0 002-2V9a2 2 0 00-2-2zm0 8H4V9h13v6zm4-5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UBatteryEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBatteryEmpty.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBatteryEmpty;
