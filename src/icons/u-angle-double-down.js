import React from 'react';
import PropTypes from 'prop-types';

const UAngleDoubleDown = props => {
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
      <path d="M11.29 11.46a1.002 1.002 0 001.42 0l3-3A1.018 1.018 0 1014.29 7L12 9.34 9.71 7a1.018 1.018 0 00-1.42 1.46l3 3zm3 1.08L12 14.84l-2.29-2.3A1.018 1.018 0 108.29 14l3 3a1.002 1.002 0 001.42 0l3-3a1.004 1.004 0 10-1.42-1.42v-.04z"></path>
    </svg>
  );
};

UAngleDoubleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAngleDoubleDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAngleDoubleDown;
