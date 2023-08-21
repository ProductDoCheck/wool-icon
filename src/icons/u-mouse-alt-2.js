import React from 'react';
import PropTypes from 'prop-types';

const UMouseAlt2 = props => {
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
      <path d="M12 2a7 7 0 00-7 7v6a7 7 0 1014 0V9a7 7 0 00-7-7zm5 13a5 5 0 11-10 0V9a5 5 0 014-4.9V12a1 1 0 002 0V4.1A5 5 0 0117 9v6z"></path>
    </svg>
  );
};

UMouseAlt2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMouseAlt2.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMouseAlt2;
