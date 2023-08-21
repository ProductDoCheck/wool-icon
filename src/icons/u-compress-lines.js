import React from 'react';
import PropTypes from 'prop-types';

const UCompressLines = props => {
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
      <path d="M17 20h-4v-3.59l.79.8a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-2.5-2.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.33.21l-2.5 2.5a1.003 1.003 0 101.42 1.42l.79-.8V20H7a1 1 0 000 2h10a1 1 0 000-2zM7 4h4v3.59l-.79-.8a1.003 1.003 0 10-1.42 1.42l2.5 2.5a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1.005 1.005 0 00-.71-1.714 1.004 1.004 0 00-.71.294l-.79.8V4h4a1 1 0 100-2H7a1 1 0 000 2z"></path>
    </svg>
  );
};

UCompressLines.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCompressLines.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCompressLines;
