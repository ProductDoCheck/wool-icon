import React from 'react';
import PropTypes from 'prop-types';

const UHorizontalAlignRight = props => {
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
      <path d="M21 2a1 1 0 00-1 1v3H9a1 1 0 00-1 1v3H3a1 1 0 00-1 1v6a1 1 0 001 1h17v3a1 1 0 002 0V3a1 1 0 00-1-1zm-1 14H4v-4h16v4zm0-6H10V8h10v2z"></path>
    </svg>
  );
};

UHorizontalAlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHorizontalAlignRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHorizontalAlignRight;
