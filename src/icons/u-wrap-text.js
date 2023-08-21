import React from 'react';
import PropTypes from 'prop-types';

const UWrapText = props => {
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
      <path d="M3 7h18a1 1 0 100-2H3a1 1 0 000 2zm6 8H3a1 1 0 000 2h6a1 1 0 000-2zm9.5-5H3a1 1 0 000 2h15.5a1.5 1.5 0 110 3h-3.09l.3-.29a1.004 1.004 0 10-1.42-1.42l-2 2a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l2 2a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-.3-.29h3.09a3.5 3.5 0 100-7z"></path>
    </svg>
  );
};

UWrapText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWrapText.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWrapText;
