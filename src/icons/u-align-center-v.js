import React from 'react';
import PropTypes from 'prop-types';

const UAlignCenterV = props => {
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
      <path d="M10.21 6.21l.79-.8V8a1 1 0 002 0V5.41l.79.8a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1.004 1.004 0 001.42 1.42zM16 11H8a1 1 0 000 2h8a1 1 0 100-2zm-2.21 6.79l-.79.8V16a1 1 0 00-2 0v2.59l-.79-.8a1.003 1.003 0 10-1.42 1.42l2.5 2.5a.999.999 0 00.33.21.94.94 0 00.76 0 .999.999 0 00.33-.21l2.5-2.5a1.004 1.004 0 10-1.42-1.42z"></path>
    </svg>
  );
};

UAlignCenterV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAlignCenterV.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAlignCenterV;
