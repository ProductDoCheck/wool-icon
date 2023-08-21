import React from 'react';
import PropTypes from 'prop-types';

const UGlobe = props => {
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
      <path d="M21.41 8.64v-.05a10 10 0 00-18.78 0v.05a9.86 9.86 0 000 6.72v.05a10 10 0 0018.78 0v-.05a9.86 9.86 0 000-6.72zM4.26 14a7.82 7.82 0 010-4h1.86a16.73 16.73 0 000 4H4.26zm.82 2h1.4c.235.892.57 1.754 1 2.57A8 8 0 015.08 16zm1.4-8h-1.4a8 8 0 012.37-2.57A12.15 12.15 0 006.48 8zM11 19.7A6.34 6.34 0 018.57 16H11v3.7zm0-5.7H8.14a14.36 14.36 0 010-4H11v4zm0-6H8.57A6.34 6.34 0 0111 4.3V8zm7.92 0h-1.4a12.148 12.148 0 00-1-2.57A8 8 0 0118.92 8zM13 4.3A6.34 6.34 0 0115.43 8H13V4.3zm0 15.4V16h2.43A6.34 6.34 0 0113 19.7zm2.86-5.7H13v-4h2.86a14.36 14.36 0 010 4zm.69 4.57c.43-.816.765-1.678 1-2.57h1.4a8 8 0 01-2.4 2.57zM19.74 14h-1.86c.081-.664.121-1.332.12-2a16.285 16.285 0 00-.12-2h1.86a7.82 7.82 0 010 4z"></path>
    </svg>
  );
};

UGlobe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGlobe.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGlobe;
