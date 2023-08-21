import React from 'react';
import PropTypes from 'prop-types';

const UCommentShield = props => {
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
      <path d="M21.7 2.86a1 1 0 00-.84-.2 3 3 0 01-2.33-.48 1 1 0 00-1.15 0 3 3 0 01-2.33.48 1 1 0 00-1.21.97V7a4.561 4.561 0 001.91 3.7l1.62 1.16a1 1 0 001.17 0l1.62-1.16A4.56 4.56 0 0022.07 7V3.63a1.001 1.001 0 00-.37-.77zM20.07 7A2.57 2.57 0 0119 9l-1 .74L16.91 9a2.57 2.57 0 01-1.07-2V4.72A5.17 5.17 0 0018 4.17a5.12 5.12 0 002.11.55L20.07 7zm-1.14 7a1 1 0 00-1.21.72A7 7 0 0110.93 20H5.35l.65-.63A1 1 0 006 18a7 7 0 014.93-12 1 1 0 100-2 9 9 0 00-7 14.62l-1.7 1.67a1 1 0 00.7 1.71h8a9 9 0 008.72-6.75 1 1 0 00-.72-1.25z"></path>
    </svg>
  );
};

UCommentShield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCommentShield.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCommentShield;
