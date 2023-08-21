import React from 'react';
import PropTypes from 'prop-types';

const UAdjust = props => {
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
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 17.93a8 8 0 010-15.86v15.86zm2 0V4.07a8 8 0 010 15.86z"></path>
    </svg>
  );
};

UAdjust.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAdjust.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAdjust;
