import React from 'react';
import PropTypes from 'prop-types';

const UArrowCircleLeft = props => {
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
      <path d="M8.29 11.29a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l3 3a1.004 1.004 0 101.42-1.42L11.41 13H15a1 1 0 000-2h-3.59l1.3-1.29a1 1 0 00-.325-1.639 1 1 0 00-1.095.219l-3 3zM2 12a10 10 0 1020 0 10 10 0 00-20 0zm18 0a8 8 0 11-16 0 8 8 0 0116 0z"></path>
    </svg>
  );
};

UArrowCircleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowCircleLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowCircleLeft;
