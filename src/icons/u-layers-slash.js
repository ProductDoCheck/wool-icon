import React from 'react';
import PropTypes from 'prop-types';

const ULayersSlash = props => {
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
      <path d="M20.49 13.94l-.34.2a1 1 0 001.02 1.72l.34-.2a1 1 0 00-1-1.72h-.02zm-8.84-7.58l.35-.21 7 4-1.76 1a1 1 0 00.5 1.87 1 1 0 00.5-.13L21.5 11a1 1 0 000-1.74l-9-5.19a1 1 0 00-1 0l-.85.49a1.003 1.003 0 101 1.74v.06zM3.71 2.29a1.004 1.004 0 10-1.42 1.42l3.64 3.63-3.43 2a1 1 0 000 1.74l9 5.2c.154.083.325.127.5.13.175-.004.346-.049.5-.13l1.5-.88 1.45 1.46-3.44 2-8.51-4.93a1.003 1.003 0 00-1 1.74l9 5.2a1 1 0 001 0l4.41-2.55 3.38 3.39a1.002 1.002 0 001.639-.325 1 1 0 00-.219-1.095l-18-18zm8.29 12l-7-4.1 2.4-1.38 5.12 5.13-.52.35z"></path>
    </svg>
  );
};

ULayersSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULayersSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULayersSlash;
