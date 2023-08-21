import React from 'react';
import PropTypes from 'prop-types';

const UArrowsRightDown = props => {
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
      <path d="M20.92 6.62a1 1 0 00-.21-.33l-3-3a1.004 1.004 0 10-1.42 1.42L17.59 6H9a3 3 0 00-3 3v8.59l-1.29-1.3a1.004 1.004 0 10-1.42 1.42l3 3a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l3-3a1.004 1.004 0 00-1.42-1.42L8 17.59V9a1 1 0 011-1h8.59l-1.3 1.29a1.001 1.001 0 00.325 1.639.999.999 0 001.095-.219l3-3a1 1 0 00.21-.33 1 1 0 000-.76z"></path>
    </svg>
  );
};

UArrowsRightDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowsRightDown.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowsRightDown;
