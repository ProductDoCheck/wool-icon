import React from 'react';
import PropTypes from 'prop-types';

const UPlay = props => {
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
      <path d="M18.54 9L8.88 3.46a3.42 3.42 0 00-5.13 3v11.12a3.42 3.42 0 005.13 2.96L18.54 15a3.42 3.42 0 000-5.92V9zm-1 4.19l-9.66 5.62a1.44 1.44 0 01-1.42 0 1.42 1.42 0 01-.71-1.23V6.42a1.42 1.42 0 01.71-1.23A1.51 1.51 0 017.17 5c.249.005.492.07.71.19l9.66 5.58a1.42 1.42 0 010 2.46v-.04z"></path>
    </svg>
  );
};

UPlay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPlay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPlay;
