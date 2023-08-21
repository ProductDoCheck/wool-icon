import React from 'react';
import PropTypes from 'prop-types';

const ULineSpacing = props => {
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
      <path d="M6.29 9.71a1 1 0 001.42 0 1 1 0 000-1.42l-2-2a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2 2a1.004 1.004 0 001.42 1.42l.29-.3v5.18l-.29-.3a1.004 1.004 0 10-1.42 1.42l2 2a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2-2a1.003 1.003 0 10-1.42-1.42l-.29.3V9.41l.29.3zM11 8h10a1 1 0 100-2H11a1 1 0 100 2zm10 3H11a1 1 0 000 2h10a1 1 0 000-2zm0 5H11a1 1 0 000 2h10a1 1 0 000-2z"></path>
    </svg>
  );
};

ULineSpacing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULineSpacing.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULineSpacing;
