import React from 'react';
import PropTypes from 'prop-types';

const UAmbulance = props => {
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
      <path d="M10.5 9.5h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 102 0v-1h1a1 1 0 000-2zm12.43 2.15l-.06-.11a.611.611 0 00-.07-.14l-2.4-3.2A3 3 0 0018 7h-2V6a3 3 0 00-3-3H4a3 3 0 00-3 3v11a1 1 0 001 1h1a3 3 0 006 0h6a3 3 0 006 0h1a1 1 0 001-1v-5a1.002 1.002 0 00-.07-.35zM6 19a1 1 0 110-2 1 1 0 010 2zm8-3H8.22a3 3 0 00-4.44 0H3V6a1 1 0 011-1h9a1 1 0 011 1v10zm2-7h2a1 1 0 01.8.4L20 11h-4V9zm2 10a1 1 0 110-2 1 1 0 010 2zm3-3h-.78a3 3 0 00-4.22-.22V13h5v3z"></path>
    </svg>
  );
};

UAmbulance.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAmbulance.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAmbulance;
