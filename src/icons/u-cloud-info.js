import React from 'react';
import PropTypes from 'prop-types';

const UCloudInfo = props => {
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
      <path d="M11.29 12.29A1 1 0 0012 14h.19a.6.6 0 00.19-.06.56.56 0 00.17-.09l.15-.12a1 1 0 000-1.42 1 1 0 00-1.41-.02zM12 15a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1zm6.42-6.78a7 7 0 00-13.36 1.89A4 4 0 006 18h2a1 1 0 100-2H6a2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 13a3 3 0 01-3 3h-1a1 1 0 000 2h1a5 5 0 001.42-9.78z"></path>
    </svg>
  );
};

UCloudInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudInfo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudInfo;
