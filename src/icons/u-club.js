import React from 'react';
import PropTypes from 'prop-types';

const UClub = props => {
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
      <path d="M21 12.5a5.52 5.52 0 00-3.51-5.12 5.5 5.5 0 10-11 0A5.5 5.5 0 008.5 18h.2a6.91 6.91 0 01-1.24 2.39A1 1 0 008.24 22h7.52a1 1 0 00.78-1.63A6.912 6.912 0 0115.3 18h.2a5.51 5.51 0 005.5-5.5zM10.06 20c.398-.807.671-1.67.81-2.56a5.467 5.467 0 001.13-.7 5.47 5.47 0 001.13.7c.139.89.412 1.753.81 2.56h-3.88zm2.72-5.3l-.08-.08-.08-.08h-.07l-.18-.09-.18-.06h-.38l-.18.06a.561.561 0 00-.17.09h-.08l-.08.08-.08.08a3.499 3.499 0 11-3.47-5.62c.055-.022.109-.05.16-.08.062-.022.122-.05.18-.08a.83.83 0 00.14-.13.62.62 0 00.21-.31.61.61 0 00.07-.17.69.69 0 000-.2 1 1 0 000-.17 3.4 3.4 0 010-.45 3.5 3.5 0 017 0c.01.15.01.3 0 .45a.823.823 0 000 .16c-.01.07-.01.14 0 .21a.61.61 0 00.07.17.62.62 0 00.21.31.83.83 0 00.14.13c.058.03.118.058.18.08.051.027.105.05.16.07a3.5 3.5 0 11-3.47 5.62l-.02.01z"></path>
    </svg>
  );
};

UClub.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClub.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClub;
