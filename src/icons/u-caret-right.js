import React from 'react';
import PropTypes from 'prop-types';

const UCaretRight = props => {
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
      <path d="M19.5 11.13l-14-8.08a1 1 0 00-1.5.87v16.16a1 1 0 001.5.87l14-8.08a1 1 0 000-1.74zM6 18.35V5.65L17 12 6 18.35z"></path>
    </svg>
  );
};

UCaretRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCaretRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCaretRight;
