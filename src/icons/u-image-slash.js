import React from 'react';
import PropTypes from 'prop-types';

const UImageSlash = props => {
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
      <path d="M19.5 4H10a1 1 0 000 2h9.5a1 1 0 011 1v6.76l-1.88-1.88a3 3 0 00-1.14-.71 1.001 1.001 0 10-.64 1.9.82.82 0 01.36.23l3.31 3.29a.66.66 0 000 .15.835.835 0 000 .15c.038.064.081.124.13.18.024.04.055.078.09.11.06.055.127.103.2.14a.91.91 0 00.48.14 1 1 0 001-1V7a3 3 0 00-2.91-3zM3.21 2.29a1.004 1.004 0 00-1.42 1.42L3.18 5.1A3 3 0 002.5 7v10a3 3 0 003 3h12.59l1.7 1.71a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-18-18zM4.5 7a1 1 0 01.12-.46l2.72 2.71a3 3 0 00-1 .63L4.5 11.76V7zm1 11a1 1 0 01-1-1v-2.42l3.3-3.29a1 1 0 011.4 0L15.91 18H5.5z"></path>
    </svg>
  );
};

UImageSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageSlash;
