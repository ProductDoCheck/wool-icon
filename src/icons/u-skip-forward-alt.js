import React from 'react';
import PropTypes from 'prop-types';

const USkipForwardAlt = props => {
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
      <path d="M5 3a3 3 0 00-3 3v12a3 3 0 006 0V6a3 3 0 00-3-3zm1 15a1 1 0 11-2 0V6a1 1 0 012 0v12zm14.68-8.35L14 5.66a2.6 2.6 0 00-2.64 0A2.74 2.74 0 0010 8v8a2.74 2.74 0 001.37 2.38 2.57 2.57 0 002.64 0l6.67-4a2.75 2.75 0 000-4.7v-.03zm-1 3l-6.66 4a.61.61 0 01-.63 0A.72.72 0 0112 16V8a.72.72 0 01.36-.64.63.63 0 01.63.01l6.66 4a.76.76 0 010 1.28h.03z"></path>
    </svg>
  );
};

USkipForwardAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USkipForwardAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USkipForwardAlt;
