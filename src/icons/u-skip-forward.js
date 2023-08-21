import React from 'react';
import PropTypes from 'prop-types';

const USkipForward = props => {
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
      <path d="M19 3a3 3 0 00-3 3v2.84L7 3.47a3.21 3.21 0 00-3.29 0A3.38 3.38 0 002 6.42v11.16a3.38 3.38 0 001.72 3A3.24 3.24 0 007 20.53l9-5.37V18a3 3 0 006 0V6a3 3 0 00-3-3zm-3.68 10.23L6 18.81a1.23 1.23 0 01-1.28 0A1.4 1.4 0 014 17.58V6.42a1.4 1.4 0 01.71-1.25A1.29 1.29 0 015.33 5c.237-.003.47.063.67.19l9.33 5.58a1.45 1.45 0 010 2.46h-.01zM20 18a1 1 0 01-2 0V6a1 1 0 012 0v12z"></path>
    </svg>
  );
};

USkipForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USkipForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USkipForward;
