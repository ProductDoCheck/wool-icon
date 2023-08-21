import React from 'react';
import PropTypes from 'prop-types';

const USubwayAlt = props => {
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
      <path d="M15 17h1a1 1 0 000-2h-1a1 1 0 000 2zm6 0V9a3 3 0 00-3-3h-5V4h4a1 1 0 100-2H7a1 1 0 000 2h4v2H6a3 3 0 00-3 3v8a3 3 0 001.2 2.39l-.91.9a1 1 0 00.325 1.639 1 1 0 001.095-.219L6.41 20h11.18l1.7 1.71a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-.91-.9A3.001 3.001 0 0021 17zM5 9a1 1 0 011-1h5v4H5V9zm14 8a1 1 0 01-1 1H6a1 1 0 01-1-1v-3h14v3zm0-5h-6V8h5a1 1 0 011 1v3zM8 17h1a1 1 0 000-2H8a1 1 0 000 2z"></path>
    </svg>
  );
};

USubwayAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USubwayAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USubwayAlt;
