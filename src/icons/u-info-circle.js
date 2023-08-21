import React from 'react';
import PropTypes from 'prop-types';

const UInfoCircle = props => {
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
      <path d="M12 11a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm.38-3.92a1 1 0 00-.76 0 1 1 0 00-.33.21 1.15 1.15 0 00-.21.33 1 1 0 00.21 1.09c.097.088.209.16.33.21A1 1 0 0013 8a1.05 1.05 0 00-.29-.71 1 1 0 00-.33-.21zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UInfoCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UInfoCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UInfoCircle;
