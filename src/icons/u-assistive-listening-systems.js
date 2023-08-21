import React from 'react';
import PropTypes from 'prop-types';

const UAssistiveListeningSystems = props => {
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
      <path d="M11 3a7 7 0 00-7 7 1 1 0 102 0 5 5 0 119.29 2.57L11.73 20A2 2 0 018 19a1 1 0 10-2 0 4 4 0 006.033 3.443A4 4 0 0013.5 20.93l3.56-7.43A7 7 0 0011 3zM4 15a1 1 0 100 2 1 1 0 000-2zM17.59 1.2a1 1 0 00-1.2 1.6A9 9 0 0120 10a1 1 0 002 0 11.06 11.06 0 00-4.41-8.8zM11 9a1 1 0 011 1 1 1 0 002 0 3 3 0 00-6 0 3 3 0 00.51 1.68c.138.196.295.377.47.54l.2.22a1 1 0 010 1.11 1 1 0 001.283 1.456 1 1 0 00.357-.316 3 3 0 00-.35-3.81l-.14-.14a1.367 1.367 0 01-.16-.18A1 1 0 0111 9zm-4 6a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  );
};

UAssistiveListeningSystems.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAssistiveListeningSystems.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAssistiveListeningSystems;
