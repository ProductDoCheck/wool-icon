import React from 'react';
import PropTypes from 'prop-types';

const UFlaskPotion = props => {
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
      <path d="M18.93 11.67a.418.418 0 000-.1A7.4 7.4 0 0015 7.62V4h1a1 1 0 100-2H8a1 1 0 000 2h1v3.62a7.4 7.4 0 00-3.89 4 .42.42 0 000 .1 7.5 7.5 0 1013.86 0l-.04-.05zm-8.62-2.41a1 1 0 00.69-.95V4h2v4.31a1 1 0 00.69.95A5.43 5.43 0 0116.23 11H7.77a5.43 5.43 0 012.54-1.74zM12 20a5.51 5.51 0 01-5.5-5.5 5.34 5.34 0 01.22-1.5h10.56c.144.487.218.992.22 1.5A5.51 5.51 0 0112 20zm2-4a1 1 0 100 2 1 1 0 000-2zm-4-1a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UFlaskPotion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFlaskPotion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFlaskPotion;
