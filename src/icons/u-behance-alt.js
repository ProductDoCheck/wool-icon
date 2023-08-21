import React from 'react';
import PropTypes from 'prop-types';

const UBehanceAlt = props => {
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
      <path d="M22.108 15.032a.997.997 0 00-1.215.722A2.999 2.999 0 0114.992 15v-1h7a1 1 0 001-1 5 5 0 10-10 0v2a4.998 4.998 0 009.84 1.247 1 1 0 00-.724-1.215zM17.992 10c.793 0 1.554.314 2.118.873.313.32.551.705.698 1.127h-5.632a2.995 2.995 0 012.816-2zm-2-3h4a1 1 0 100-2h-4a1 1 0 100 2zM9.91 11.718A3.987 3.987 0 006.992 5h-5a1 1 0 00-1 1v13a1 1 0 001 1h5.5a4.491 4.491 0 002.418-8.282zM2.992 7h4a2 2 0 110 4h-4V7zm4.5 11h-4.5v-5h4.5a2.5 2.5 0 110 5z"></path>
    </svg>
  );
};

UBehanceAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBehanceAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBehanceAlt;
