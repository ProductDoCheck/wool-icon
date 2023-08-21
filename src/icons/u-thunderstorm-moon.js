import React from 'react';
import PropTypes from 'prop-types';

const UThunderstormMoon = props => {
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
      <path d="M11.58 16.5h-1.26l.86-1.5a1 1 0 10-1.73-1l-1.73 3a1 1 0 00.86 1.5h1.27L9 20a1.003 1.003 0 101.74 1l1.73-3a1 1 0 00-.89-1.5zM21.7 7.57a1 1 0 00-.93-.26 3.2 3.2 0 01-.66.08 3 3 0 01-3-3c.003-.219.03-.437.08-.65A1 1 0 0016 2.53a4.93 4.93 0 00-3.83 4.21 6.24 6.24 0 00-1.67-.24 6 6 0 00-5.94 5.13 3.49 3.49 0 00-.34 6.62 1 1 0 10.72-1.86 1.5 1.5 0 01.56-2.89 1 1 0 001-1 4 4 0 014-4c.776 0 1.535.23 2.18.66a4 4 0 011.57 2 1 1 0 00.78.67 2.33 2.33 0 01.25 4.53 1.01 1.01 0 10.27 2c.09.015.18.015.27 0A4.33 4.33 0 0019 14.17a4.23 4.23 0 00-.49-2A4.94 4.94 0 0022 8.5a1 1 0 00-.3-.93zm-4.59 2.82c-.14.011-.28.011-.42 0-.218-.15-.45-.28-.69-.39a6 6 0 00-1.82-2.28v-.37a3 3 0 011.05-2.28 5 5 0 004.23 4.23 3 3 0 01-2.35 1.09z"></path>
    </svg>
  );
};

UThunderstormMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UThunderstormMoon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UThunderstormMoon;
