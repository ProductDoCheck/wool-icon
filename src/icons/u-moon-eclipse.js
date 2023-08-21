import React from 'react';
import PropTypes from 'prop-types';

const UMoonEclipse = props => {
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
      <path d="M12 2a10 10 0 00-2.14.24h-.12a10 10 0 00-.1 19.44h.14c.725.193 1.47.3 2.22.32a10 10 0 000-20zm-2 17.74a8 8 0 010-15.48 8 8 0 010 15.48zm4.53-.16a10 10 0 000-15.16 8 8 0 010 15.16z"></path>
    </svg>
  );
};

UMoonEclipse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoonEclipse.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoonEclipse;
