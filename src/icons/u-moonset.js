import React from 'react';
import PropTypes from 'prop-types';

const UMoonset = props => {
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
      <path d="M11 19H8a1 1 0 000 2h3a1 1 0 000-2zm9-4h-1.16A8.18 8.18 0 0020 12.05a1 1 0 00-.34-.93 1 1 0 00-1-.19 6 6 0 01-1.92.32 6.06 6.06 0 01-6.06-6c.01-.335.043-.67.1-1a.999.999 0 00-.35-.92 1 1 0 00-1-.18A8.06 8.06 0 004 10.68 8 8 0 005.27 15H4a1 1 0 000 2h16a1 1 0 000-2zm-3.72 0H7.83a6 6 0 01.88-9.36 8.06 8.06 0 008.05 7.61c.263.015.527.015.79 0A6.081 6.081 0 0116.28 15zM16 19h-1a1 1 0 000 2h1a1 1 0 000-2z"></path>
    </svg>
  );
};

UMoonset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMoonset.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMoonset;
