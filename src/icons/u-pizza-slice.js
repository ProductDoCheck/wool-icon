import React from 'react';
import PropTypes from 'prop-types';

const UPizzaSlice = props => {
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
      <path d="M8.51 12.48a1 1 0 100 2.001 1 1 0 000-2.001zm0-4.48a1 1 0 100 2 1 1 0 000-2zM12 10a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm8.5-1.43a3 3 0 00-2.3-.29 2.9 2.9 0 00-1.09.56L5.51 2.13a1 1 0 00-1 0A1 1 0 004 3v13.17A2.94 2.94 0 002 19a3 3 0 002.92 3h.58a18.57 18.57 0 0016.11-9.41 3 3 0 00-1.1-4.02h-.01zM6 4.73l9.89 5.71A12.57 12.57 0 016 16V4.73zm13.87 6.88A16.58 16.58 0 015 20a1 1 0 01-1-1 1 1 0 01.3-.72A1 1 0 015 18h.51a14.5 14.5 0 0012.62-7.37.9.9 0 01.58-.44 1 1 0 01.75.09 1 1 0 01.42 1.33h-.01z"></path>
    </svg>
  );
};

UPizzaSlice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPizzaSlice.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPizzaSlice;
