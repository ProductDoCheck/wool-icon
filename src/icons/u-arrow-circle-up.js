import React from 'react';
import PropTypes from 'prop-types';

const UArrowCircleUp = props => {
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
      <path d="M12.71 8.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-3 3a1.004 1.004 0 001.42 1.42l1.29-1.3V15a1 1 0 002 0v-3.59l1.29 1.3a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-3-3zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UArrowCircleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowCircleUp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowCircleUp;
