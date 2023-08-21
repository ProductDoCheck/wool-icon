import React from 'react';
import PropTypes from 'prop-types';

const UCalculatorAlt = props => {
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
      <path d="M5.5 8H6v.5a1 1 0 002 0V8h.5a1 1 0 000-2H8v-.5a1 1 0 00-2 0V6h-.5a1 1 0 000 2zm-.62 11.12a1 1 0 001.41 0l.71-.71.71.71a1 1 0 001.41 0 1 1 0 000-1.41L8.41 17l.71-.71a1 1 0 00-1.41-1.41l-.71.71-.71-.71a1 1 0 00-1.41 1.41l.71.71-.71.71a1 1 0 000 1.41zM20 1H4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3zm-9 20H4a1 1 0 01-1-1v-7h8v8zm0-10H3V4a1 1 0 011-1h7v8zm10 9a1 1 0 01-1 1h-7v-8h8v7zm0-9h-8V3h7a1 1 0 011 1v7zm-5.5 5.5h3a1 1 0 000-2h-3a1 1 0 000 2zm3-10.5h-3a1 1 0 100 2h3a1 1 0 100-2zm-3 13.5h3a1 1 0 000-2h-3a1 1 0 000 2z"></path>
    </svg>
  );
};

UCalculatorAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCalculatorAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCalculatorAlt;
