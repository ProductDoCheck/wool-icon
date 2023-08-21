import React from 'react';
import PropTypes from 'prop-types';

const UStepBackwardAlt = props => {
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
      <path d="M19 3a3 3 0 00-3 3v12a3 3 0 006 0V6a3 3 0 00-3-3zm1 15a1 1 0 01-2 0V6a1 1 0 012 0v12zM12.63 5.63a2.6 2.6 0 00-2.64 0l-6.67 4a2.75 2.75 0 000 4.7l6.67 4a2.57 2.57 0 002.64 0A2.74 2.74 0 0014 16V8a2.74 2.74 0 00-1.37-2.37zM12 16a.72.72 0 01-.36.64.61.61 0 01-.63 0l-6.66-4a.76.76 0 010-1.28l6.66-4a.63.63 0 01.63-.01A.72.72 0 0112 8v8z"></path>
    </svg>
  );
};

UStepBackwardAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStepBackwardAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStepBackwardAlt;
