import React from 'react';
import PropTypes from 'prop-types';

const UBaseballBall = props => {
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
      <path d="M13.922 6.44a1 1 0 00-1.703 1.05c.177.285.365.567.565.843a1 1 0 001.62-1.174c-.172-.235-.332-.475-.482-.719zm-2.73 9.222a1 1 0 00-1.609 1.188c.17.23.327.466.476.709a.998.998 0 001.376.329 1 1 0 00.329-1.376 12.472 12.472 0 00-.572-.85zm-3.707-3.429a1 1 0 10-1.045 1.705c.243.149.48.308.713.479A1.001 1.001 0 108.331 12.8c-.276-.201-.558-.39-.846-.567zm10.06-2.167c-.242-.149-.48-.309-.715-.48a1 1 0 00-1.178 1.618c.277.201.559.39.847.567a1.002 1.002 0 001.511-.695 1 1 0 00-.464-1.01zm1.447-5.065a9.9 9.9 0 100 14.001 9.913 9.913 0 000-14.001zM17.72 17.728a8.03 8.03 0 01-4.516 2.274.97.97 0 00-1.746.074 8.062 8.062 0 01-7.535-7.532.976.976 0 00.073-1.747 8.04 8.04 0 016.784-6.792.996.996 0 001.086.472.983.983 0 00.66-.546 8.055 8.055 0 017.537 7.538.972.972 0 00-.074 1.741 8.046 8.046 0 01-2.27 4.518z"></path>
    </svg>
  );
};

UBaseballBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBaseballBall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBaseballBall;
