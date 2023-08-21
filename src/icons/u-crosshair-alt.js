import React from 'react';
import PropTypes from 'prop-types';

const UCrosshairAlt = props => {
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
      <path d="M12 11a1 1 0 100 2 1 1 0 000-2zm0-9a10 10 0 100 20 10 10 0 000-20zm1 17.93V17a1 1 0 00-2 0v2.93A8 8 0 014.07 13H7a1 1 0 000-2H4.07A8 8 0 0111 4.07V7a1 1 0 002 0V4.07A8 8 0 0119.93 11H17a1 1 0 000 2h2.93A8 8 0 0113 19.93z"></path>
    </svg>
  );
};

UCrosshairAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCrosshairAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCrosshairAlt;
