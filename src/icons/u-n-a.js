import React from 'react';
import PropTypes from 'prop-types';

const UNA = props => {
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
      <path d="M19 6h-1a3 3 0 00-3 3v8a1 1 0 002 0v-4h3v4a1 1 0 002 0V9a3 3 0 00-3-3zm1 5h-3V9a1 1 0 011-1h1a1 1 0 011 1v2zM8 6a1 1 0 00-1 1v5.76L3.89 6.55A1 1 0 002 7v10a1 1 0 102 0v-5.76l3.11 6.21A1 1 0 008 18c.076.01.154.01.23 0A1 1 0 009 17V7a1 1 0 00-1-1zm4-2a1 1 0 00-1 1v14a1 1 0 002 0V5a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UNA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UNA.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UNA;
