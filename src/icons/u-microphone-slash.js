import React from 'react';
import PropTypes from 'prop-types';

const UMicrophoneSlash = props => {
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
      <path d="M10.5 3.73a2 2 0 012.95-.14A2 2 0 0114 5v3.41a1 1 0 002 0V5a4 4 0 00-7-2.53 1 1 0 101.5 1.26zm8.22 9.54h.2a1 1 0 001-.81c.072-.483.098-.972.08-1.46a1 1 0 10-2 0c0 .37-.037.738-.11 1.1a1 1 0 00.83 1.17zm3 6.06l-18-18A1 1 0 102.3 2.74L8 8.48V11a4 4 0 006 3.46l1.46 1.46A6 6 0 016 11a1 1 0 10-2 0 8 8 0 007 7.93V21H9a1 1 0 100 2h6a1 1 0 000-2h-2v-2.07a7.87 7.87 0 003.85-1.59l3.4 3.4a1 1 0 001.42-1.41h.05zM12 13a2 2 0 01-2-2v-.52l2.45 2.46A1.74 1.74 0 0112 13z"></path>
    </svg>
  );
};

UMicrophoneSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMicrophoneSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMicrophoneSlash;
