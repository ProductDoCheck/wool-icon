import React from 'react';
import PropTypes from 'prop-types';

const UBrightnessLow = props => {
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
      <path d="M3 11a1 1 0 100 2.001A1 1 0 003 11zm1.93 6.66a1 1 0 101.41 1.418 1 1 0 00-1.41-1.418zM6.34 6.34a1 1 0 10-1.41-1.418A1 1 0 006.34 6.34zM12 4a1 1 0 100-2 1 1 0 000 2zm5.66 13.66a1 1 0 101.41 1.418 1 1 0 00-1.41-1.418zM21 11a1 1 0 100 2.002A1 1 0 0021 11zm-3.34-6.07a1 1 0 101.41 1.418 1 1 0 00-1.41-1.418zM12 20a1 1 0 100 2 1 1 0 000-2zm0-14a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"></path>
    </svg>
  );
};

UBrightnessLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBrightnessLow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBrightnessLow;
