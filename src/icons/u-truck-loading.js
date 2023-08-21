import React from 'react';
import PropTypes from 'prop-types';

const UTruckLoading = props => {
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
      <path d="M22 16h-2.18a3 3 0 00.18-1v-5a3 3 0 00-3-3h-6a3 3 0 00-3 3v5a3 3 0 00.18 1H7a1 1 0 01-1-1V5a3 3 0 00-3-3H2a1 1 0 000 2h1a1 1 0 011 1v10a3 3 0 002.22 2.88 3 3 0 105.6.12h3.36a3 3 0 105.64 0H22a1 1 0 000-2zM9 20a1 1 0 110-2 1 1 0 010 2zm2-4a1 1 0 01-1-1v-5a1 1 0 011-1h6a1 1 0 011 1v5a1 1 0 01-1 1h-6zm7 4a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UTruckLoading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTruckLoading.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTruckLoading;
