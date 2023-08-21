import React from 'react';
import PropTypes from 'prop-types';

const UKid = props => {
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
      <path d="M10 10a1 1 0 10-2 0 1 1 0 002 0zm4.5 4.06a1 1 0 00-1.37.36 1.3 1.3 0 01-2.26 0 1 1 0 00-1.37-.36 1 1 0 00-.37 1.36 3.31 3.31 0 005.74 0 1 1 0 00-.37-1.36zM15 9a1 1 0 100 2 1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18A8 8 0 019 4.57c-.01.143-.01.287 0 .43a3 3 0 003 3 1 1 0 100-2 1 1 0 110-2 8 8 0 010 16z"></path>
    </svg>
  );
};

UKid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UKid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UKid;
