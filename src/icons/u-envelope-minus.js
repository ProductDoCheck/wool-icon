import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeMinus = props => {
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
      <path d="M21 8a1 1 0 00-1 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V7.41l5.88 5.88a3 3 0 004.24 0l3.59-3.58a1.004 1.004 0 10-1.42-1.42l-3.58 3.59a1.002 1.002 0 01-1.42 0L5.41 6H13a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V9a1 1 0 00-1-1zm-4-2h4a1 1 0 100-2h-4a1 1 0 100 2z"></path>
    </svg>
  );
};

UEnvelopeMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeMinus;
