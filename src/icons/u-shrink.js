import React from 'react';
import PropTypes from 'prop-types';

const UShrink = props => {
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
      <path d="M10.71 11.29l-2.5-2.5a1.004 1.004 0 00-1.42 1.42l.8.79H3a1 1 0 000 2h4.59l-.8.79a1 1 0 000 1.42.998.998 0 001.42 0l2.5-2.5a1 1 0 00.21-.33 1 1 0 000-.76 1.001 1.001 0 00-.21-.33zM21 11h-4.59l.8-.79a1.005 1.005 0 00-1.42-1.42l-2.5 2.5a1.001 1.001 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l2.5 2.5a.999.999 0 001.42 0 1 1 0 000-1.42l-.8-.79H21a1 1 0 100-2z"></path>
    </svg>
  );
};

UShrink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShrink.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShrink;
