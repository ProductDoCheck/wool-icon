import React from 'react';
import PropTypes from 'prop-types';

const UVerticalAlignCenter = props => {
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
      <path d="M21 11h-3V6a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H7a1 1 0 00-1 1v8H3a1 1 0 000 2h3v8a1 1 0 001 1h6a1 1 0 001-1v-2h3a1 1 0 001-1v-5h3a1 1 0 000-2zm-9 9H8V4h4v16zm4-3h-2V7h2v10z"></path>
    </svg>
  );
};

UVerticalAlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVerticalAlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVerticalAlignCenter;
