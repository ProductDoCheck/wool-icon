import React from 'react';
import PropTypes from 'prop-types';

const UVectorSquare = props => {
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
      <path d="M20 16.18V7.82A3 3 0 1016.18 4H7.82A3 3 0 104 7.82v8.36A3 3 0 107.82 20h8.36A3 3 0 1020 16.18zM19 4a1 1 0 110 2 1 1 0 010-2zM5 4a1 1 0 110 2 1 1 0 010-2zm0 16a1 1 0 110-2 1 1 0 010 2zm11.18-2H7.82A3 3 0 006 16.18V7.82A3 3 0 007.82 6h8.36A3 3 0 0018 7.82v8.36A3.002 3.002 0 0016.18 18zM19 20a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UVectorSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVectorSquare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVectorSquare;
