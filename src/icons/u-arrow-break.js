import React from 'react';
import PropTypes from 'prop-types';

const UArrowBreak = props => {
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
      <path d="M7 11h10a1 1 0 000-2h-4V5.41l.79.8a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1.004 1.004 0 001.42 1.42l.79-.8V9H7a1 1 0 000 2zm10 2H7a1 1 0 100 2h4v3.59l-.79-.8a1.003 1.003 0 10-1.42 1.42l2.5 2.5a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1.004 1.004 0 10-1.42-1.42l-.79.8V15h4a1 1 0 000-2z"></path>
    </svg>
  );
};

UArrowBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowBreak.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowBreak;
