import React from 'react';
import PropTypes from 'prop-types';

const UBluetoothB = props => {
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
      <path d="M13.41 12l3.8-3.79a1 1 0 000-1.42l-4.5-4.5a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.54.54c-.051.12-.078.25-.08.38v6.59l-2.79-2.8a1.004 1.004 0 10-1.42 1.42l3.8 3.79-3.8 3.79a1.003 1.003 0 101.42 1.42l2.79-2.8V21c.002.13.029.26.08.38a1 1 0 00.54.54.94.94 0 00.76 0 1 1 0 00.33-.21l4.5-4.5a1.002 1.002 0 000-1.42L13.41 12zM13 5.41l2.09 2.09L13 9.59V5.41zm0 13.18v-4.18l2.09 2.09L13 18.59z"></path>
    </svg>
  );
};

UBluetoothB.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBluetoothB.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBluetoothB;
