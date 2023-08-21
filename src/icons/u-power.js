import React from 'react';
import PropTypes from 'prop-types';

const UPower = props => {
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
      <path d="M10.21 6.21l.79-.8V10a1 1 0 102 0V5.41l.79.8a.999.999 0 001.42 0 1.001 1.001 0 000-1.42l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1.004 1.004 0 101.42 1.42zM18 7.56A1.018 1.018 0 0016.56 9a6.45 6.45 0 11-9.12 0A1.018 1.018 0 106 7.56a8.46 8.46 0 1012 0z"></path>
    </svg>
  );
};

UPower.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPower.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPower;
