import React from 'react';
import PropTypes from 'prop-types';

const UShieldSlash = props => {
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
      <path d="M21.71 20.29l-16-16-2-2a1.004 1.004 0 00-1.42 1.42L4 5.41v6.47a9 9 0 003.77 7.32l3.65 2.61a1 1 0 001.16 0l3.65-2.61c.302-.214.59-.448.86-.7l3.2 3.21a.999.999 0 001.42 0 1 1 0 000-1.42zm-6.64-2.71L12 19.77l-3.07-2.19A7 7 0 016 11.88V7.41l9.67 9.68c-.19.17-.39.33-.6.49zm-5-12.51c.672-.225 1.32-.52 1.93-.88a9.82 9.82 0 006 1.39v6.3c0 .395-.033.79-.1 1.18a1 1 0 00.83 1.15h.16a1 1 0 001-.84c.078-.496.119-.998.12-1.5V4.43a1.001 1.001 0 00-.37-.77 1 1 0 00-.83-.21 7.89 7.89 0 01-6.23-1.27 1 1 0 00-1.14 0 8 8 0 01-2 1 1.003 1.003 0 00.64 1.9l-.01-.01z"></path>
    </svg>
  );
};

UShieldSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShieldSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShieldSlash;
