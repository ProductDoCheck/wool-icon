import React from 'react';
import PropTypes from 'prop-types';

const UFilterSlash = props => {
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
      <path d="M19.22 6h-6.56a1 1 0 000 2h6.56a.78.78 0 01.78.78v.78h-3.78a1 1 0 000 2h2.37l-.7.69a1.001 1.001 0 00.325 1.639.999.999 0 001.095-.22l1.88-1.88c.23-.228.413-.5.54-.8v-.1c.166-.332.258-.697.27-1.07v-1A2.79 2.79 0 0019.22 6zM3.71 2.29a1.004 1.004 0 10-1.42 1.42l2.85 2.84A2.73 2.73 0 004 8.78v1c0 .38.082.755.24 1.1v.06c.128.301.31.576.54.81l5.41 5.4V21a1 1 0 001 1c.157-.001.31-.039.45-.11l3.56-1.78a1 1 0 00.55-.89v-2l4.51 4.52a.998.998 0 001.42 0 .997.997 0 00.219-1.095.998.998 0 00-.22-.325L3.71 2.29zM6 8.78a.76.76 0 01.5-.72L6.59 8l1.56 1.56H6v-.78zm8.07 7.29a1.001 1.001 0 00-.29.71v1.82l-1.56.78v-2.6a.999.999 0 00-.29-.71l-4.52-4.51h2.74l4.22 4.22-.3.29z"></path>
    </svg>
  );
};

UFilterSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFilterSlash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFilterSlash;
