import React from 'react';
import PropTypes from 'prop-types';

const UProcessor = props => {
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
      <path d="M14 9h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-1 4h-2v-2h2v2zm8 0a1 1 0 000-2h-2V9h2a1 1 0 100-2h-2.18A3 3 0 0017 5.18V3a1 1 0 00-2 0v2h-2V3a1 1 0 00-2 0v2H9V3a1 1 0 00-2 0v2.18A3 3 0 005.18 7H3a1 1 0 000 2h2v2H3a1 1 0 000 2h2v2H3a1 1 0 000 2h2.18A3 3 0 007 18.82V21a1 1 0 102 0v-2h2v2a1 1 0 002 0v-2h2v2a1 1 0 002 0v-2.18A3 3 0 0018.82 17H21a1 1 0 000-2h-2v-2h2zm-4 3a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h8a1 1 0 011 1v8z"></path>
    </svg>
  );
};

UProcessor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UProcessor.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UProcessor;
