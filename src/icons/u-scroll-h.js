import React from 'react';
import PropTypes from 'prop-types';

const UScrollH = props => {
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
      <path d="M4.71 6.29a1.004 1.004 0 00-1.42 1.42L7.59 12l-4.3 4.29a1 1 0 000 1.42.998.998 0 001.42 0l5-5a.999.999 0 000-1.42l-5-5zM16.41 12l4.3-4.29a1.004 1.004 0 10-1.42-1.42l-5 5a1.001 1.001 0 000 1.42l5 5a.999.999 0 001.42 0 1 1 0 000-1.42L16.41 12z"></path>
    </svg>
  );
};

UScrollH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UScrollH.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UScrollH;
