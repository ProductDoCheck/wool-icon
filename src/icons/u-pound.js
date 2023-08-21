import React from 'react';
import PropTypes from 'prop-types';

const UPound = props => {
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
      <path d="M20 20H8a4.92 4.92 0 001-3v-3h6a1 1 0 000-2H9V8.89a4.89 4.89 0 019.13-2.44 1 1 0 001.37.36 1 1 0 00.37-1.36A6.9 6.9 0 007 8.89V12H4a1 1 0 000 2h3v3a3 3 0 01-3 3 1 1 0 000 2h16a1 1 0 000-2z"></path>
    </svg>
  );
};

UPound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPound.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPound;
