import React from 'react';
import PropTypes from 'prop-types';

const UBabyCarriage = props => {
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
      <path d="M19 16a3 3 0 100 5.999A3 3 0 0019 16zm0 4a1 1 0 110-2 1 1 0 010 2zM9 16a3 3 0 100 6 3 3 0 000-6zm0 4a1 1 0 110-2 1 1 0 010 2zM22 8.5A6.51 6.51 0 0015.5 2H15a1 1 0 00-1 1v5H7.52L6.27 4.65A1 1 0 005.33 4H3a1 1 0 000 2h1.64l1.25 3.37.51 1.37v.09A6.44 6.44 0 0012.5 15h3A6.49 6.49 0 0022 8.5zm-3.32 3.18A4.471 4.471 0 0115.5 13h-3a4.47 4.47 0 01-4.16-2.8.14.14 0 010-.06L8.26 10h11.48a4.32 4.32 0 01-1.06 1.68zM16 8V4a4.49 4.49 0 014 4h-4z"></path>
    </svg>
  );
};

UBabyCarriage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBabyCarriage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBabyCarriage;
