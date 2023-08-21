import React from 'react';
import PropTypes from 'prop-types';

const UMeh = props => {
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
      <path d="M9 11a1 1 0 100-2 1 1 0 000 2zm6 3H9a1 1 0 000 2h6a1 1 0 000-2zm0-5a1 1 0 100 2 1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UMeh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMeh.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMeh;
