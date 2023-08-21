import React from 'react';
import PropTypes from 'prop-types';

const UCompressV = props => {
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
      <path d="M12.71 13.29a1 1 0 00-.33-.21 1 1 0 00-.76 0 1.001 1.001 0 00-.33.21l-2.5 2.5a1.004 1.004 0 001.42 1.42l.79-.8V21a1 1 0 002 0v-4.59l.79.8a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-2.5-2.5zm-1.42-2.58c.095.091.207.162.33.21a.94.94 0 00.76 0 1 1 0 00.33-.21l2.5-2.5a1.005 1.005 0 00-.71-1.714 1.004 1.004 0 00-.71.294l-.79.8V3a1 1 0 00-2 0v4.59l-.79-.8a1.003 1.003 0 10-1.42 1.42l2.5 2.5z"></path>
    </svg>
  );
};

UCompressV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCompressV.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCompressV;
