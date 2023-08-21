import React from 'react';
import PropTypes from 'prop-types';

const UPathfinderUnite = props => {
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
      <path d="M21 7.54h-4.54V3a1 1 0 00-1-1H3a1 1 0 00-1 1v12.46a1 1 0 001 1h4.54V21a1 1 0 001 1H21a1 1 0 001-1V8.54a1 1 0 00-1-1zM20 20H9.54v-4.54a1 1 0 00-1-1H4V4h10.46v4.54a1 1 0 001 1H20V20z"></path>
    </svg>
  );
};

UPathfinderUnite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPathfinderUnite.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPathfinderUnite;
