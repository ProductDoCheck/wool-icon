import React from 'react';
import PropTypes from 'prop-types';

const UBrain = props => {
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
      <path d="M22 11a4 4 0 00-2-3.48A3.01 3.01 0 0020 7a3 3 0 00-3-3h-.18A3 3 0 0012 2.78 3 3 0 007.18 4H7a3 3 0 00-3 3 3 3 0 000 .52 4 4 0 00-.55 6.59A4 4 0 007 20h.18A3 3 0 0012 21.22 3 3 0 0016.82 20H17a4 4 0 003.5-5.89A3.999 3.999 0 0022 11zM11 8.55a4.721 4.721 0 00-.68-.32 1.002 1.002 0 00-.64 1.9A2 2 0 0111 12v1.55a4.715 4.715 0 00-.68-.32 1.002 1.002 0 10-.64 1.9A2 2 0 0111 17v2a1 1 0 01-1 1 1 1 0 01-.91-.6c.168-.098.328-.209.48-.33a1.002 1.002 0 00-1.28-1.54A2 2 0 015 16a2 2 0 01.32-1.06c.224.04.452.06.68.06a1 1 0 000-2 1.84 1.84 0 01-.69-.13A2 2 0 015 9.25a3.1 3.1 0 00.46.35 1.003 1.003 0 101-1.74.9.9 0 01-.34-.33A.92.92 0 016 7a1 1 0 011-1 .76.76 0 01.21 0c.053.16.116.318.19.47a1 1 0 001.37.37 1 1 0 00.36-1.34A1.06 1.06 0 019 5a1 1 0 012 0v3.55zm7.69 4.32A1.84 1.84 0 0118 13a1 1 0 000 2c.228 0 .456-.02.68-.06A2 2 0 0119 16a2 2 0 01-3.29 1.53 1.001 1.001 0 00-1.28 1.54c.152.121.312.232.48.33a1 1 0 01-.91.6 1 1 0 01-1-1v-2a2 2 0 011.32-1.87 1.003 1.003 0 00-.64-1.9 4.715 4.715 0 00-.68.32V12a2 2 0 011.32-1.87 1.003 1.003 0 00-.64-1.9 4.721 4.721 0 00-.68.32V5a1 1 0 112 0 1.06 1.06 0 01-.13.5 1 1 0 101.73 1c.075-.162.138-.33.19-.5A.76.76 0 0117 6a1 1 0 011 1 1 1 0 01-.17.55.9.9 0 01-.33.31 1.003 1.003 0 101 1.74c.18-.097.347-.215.5-.35a2 2 0 01-.27 3.62h-.04z"></path>
    </svg>
  );
};

UBrain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBrain.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBrain;
