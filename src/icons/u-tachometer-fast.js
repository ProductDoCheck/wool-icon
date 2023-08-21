import React from 'react';
import PropTypes from 'prop-types';

const UTachometerFast = props => {
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
      <path d="M15.29 10.29l-2.78 2.78A2.087 2.087 0 0012 13a2 2 0 00-2 2c.002.172.026.344.07.51l-.78.78a1 1 0 00.325 1.639 1 1 0 001.095-.219l.78-.78c.166.044.338.068.51.07a2 2 0 002-2 2.097 2.097 0 00-.07-.51l2.78-2.78a1.004 1.004 0 10-1.42-1.42zM12 4A10 10 0 002 14a9.91 9.91 0 001.69 5.56 1.002 1.002 0 001.66-1.12 8 8 0 1113.3 0 1 1 0 001.3 1.444 1 1 0 00.36-.324A9.91 9.91 0 0022 14 10 10 0 0012 4z"></path>
    </svg>
  );
};

UTachometerFast.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTachometerFast.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTachometerFast;
