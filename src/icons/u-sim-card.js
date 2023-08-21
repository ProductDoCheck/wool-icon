import React from 'react';
import PropTypes from 'prop-types';

const USimCard = props => {
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
      <path d="M17 3.5H7A3.5 3.5 0 003.5 7v10A3.5 3.5 0 007 20.5h10a3.5 3.5 0 003.5-3.5V7A3.5 3.5 0 0017 3.5zm-6.5 2h3v3h-3v-3zm-2 13H7A1.5 1.5 0 015.5 17v-1.5h3v3zm5 0h-3v-3h3v3zm5-1.5a1.5 1.5 0 01-1.5 1.5h-1.5v-3h3V17zm0-3.5h-13V7A1.5 1.5 0 017 5.5h1.5v4a1 1 0 001 1h9v3zm0-5h-3v-3H17A1.5 1.5 0 0118.5 7v1.5z"></path>
    </svg>
  );
};

USimCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USimCard.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USimCard;
