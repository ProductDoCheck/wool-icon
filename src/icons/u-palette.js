import React from 'react';
import PropTypes from 'prop-types';

const UPalette = props => {
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
      <path d="M7.42 15.54a1 1 0 101.418 1.41 1 1 0 00-1.418-1.41zm0-8.49a1 1 0 101.418 1.41A1 1 0 007.42 7.05zm4.95 10a1 1 0 101 1 1 1 0 00-1-1.05v.05zm-6-6a1 1 0 101 1 1 1 0 00-1-1.05v.05zm6-6a1 1 0 101 1 1 1 0 00-1-1.05v.05zm3.54 2.05a1 1 0 101.41 0 1 1 0 00-1.41-.05v.05zm6.3 0a11 11 0 10-7.85 15.74 3.87 3.87 0 002.5-1.65 4.2 4.2 0 00.61-3.19 5.651 5.651 0 01-.1-1 5 5 0 013-4.56 3.84 3.84 0 002.06-2.25 4 4 0 00-.22-3.11v.02zm-1.7 2.44a1.9 1.9 0 01-1 1.09A7 7 0 0015.37 17c.002.47.048.939.14 1.4a2.16 2.16 0 01-.31 1.65 1.789 1.789 0 01-1.21.8 9 9 0 01-10.62-9.13A9.05 9.05 0 0111.85 3h.51a9 9 0 018.06 5 2 2 0 01.09 1.52v.02zM12.37 11a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UPalette.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPalette.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPalette;
