import React from 'react';
import PropTypes from 'prop-types';

const UAnkh = props => {
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
      <path d="M18 12h-3.09A7.23 7.23 0 0017 7 5 5 0 007 7a7.23 7.23 0 002.09 5H6a1 1 0 000 2h5v7a1 1 0 002 0v-7h5a1 1 0 000-2zm-6-.16c-.93-.62-3-2.26-3-4.84a3 3 0 116 0c0 2.58-2.07 4.23-3 4.84z"></path>
    </svg>
  );
};

UAnkh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAnkh.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAnkh;
