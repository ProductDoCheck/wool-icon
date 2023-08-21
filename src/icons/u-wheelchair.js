import React from 'react';
import PropTypes from 'prop-types';

const UWheelchair = props => {
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
      <path d="M12 6.5a2 2 0 100-4 2 2 0 000 4zm7.5 14h-1v-5a1 1 0 00-1-1h-5v-2h5a1 1 0 000-2h-5v-2a1 1 0 10-2 0v7a1 1 0 001 1h5v5a1 1 0 001 1h2a1 1 0 000-2zm-6.8-1.6a4 4 0 01-7.2-2.4 4 4 0 012.4-3.66A1.003 1.003 0 007.1 11a5.999 5.999 0 107.2 9.1 1 1 0 10-1.6-1.2z"></path>
    </svg>
  );
};

UWheelchair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWheelchair.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWheelchair;
