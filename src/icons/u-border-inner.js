import React from 'react';
import PropTypes from 'prop-types';

const UBorderInner = props => {
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
      <path d="M8 5a1 1 0 100-2 1 1 0 000 2zM4 9a1 1 0 100-2 1 1 0 000 2zm0-4a1 1 0 100-2 1 1 0 000 2zm0 14a1 1 0 100 2 1 1 0 000-2zM20 5a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm-4-4a1 1 0 100-2 1 1 0 000 2zm4 14a1 1 0 100 2 1 1 0 000-2zM4 15a1 1 0 100 2.001A1 1 0 004 15zm16 0a1 1 0 100 2.002A1 1 0 0020 15zm-4 4a1 1 0 100 2 1 1 0 000-2zm5-7a1 1 0 00-1-1h-7V4a1 1 0 00-2 0v7H4a1 1 0 000 2h7v7a1 1 0 002 0v-7h7a1 1 0 001-1zM8 19a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UBorderInner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderInner.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderInner;
