import React from 'react';
import PropTypes from 'prop-types';

const UMehAlt = props => {
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
      <path d="M9 11h1a1 1 0 000-2H9a1 1 0 000 2zm6 3H9a1 1 0 000 2h6a1 1 0 000-2zm0-5h-1a1 1 0 100 2h1a1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UMehAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMehAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMehAlt;
