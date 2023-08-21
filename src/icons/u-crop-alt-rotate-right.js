import React from 'react';
import PropTypes from 'prop-types';

const UCropAltRotateRight = props => {
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
      <path d="M16 4h-.59l.3-.29A1.005 1.005 0 0015 1.996c-.266 0-.522.106-.71.294l-2 2a1.001 1.001 0 000 1.42l2 2a1 1 0 001.639-.325 1 1 0 00-.219-1.095l-.3-.29H16a3 3 0 013 3v2a1 1 0 102 0V9a5 5 0 00-5-5zm0 14h-1v-7a1 1 0 00-1-1H7V9a1 1 0 00-2 0v1H4a1 1 0 000 2h1v7a1 1 0 001 1h7v1a1 1 0 102 0v-1h1a1 1 0 100-2zm-3 0H7v-6h6v6z"></path>
    </svg>
  );
};

UCropAltRotateRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCropAltRotateRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCropAltRotateRight;
