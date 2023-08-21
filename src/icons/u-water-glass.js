import React from 'react';
import PropTypes from 'prop-types';

const UWaterGlass = props => {
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
      <path d="M18.08 7a1 1 0 00-1.08.92l-.35 4.55a2.67 2.67 0 01-1.2-.77 1 1 0 00-1.5 0 2.649 2.649 0 01-3.9 0 1 1 0 00-1.5 0 2.7 2.7 0 01-1.2.77L7 7.92a1 1 0 00-1.457-.814A1 1 0 005 8.08l.86 11.15a3 3 0 003 2.77h6.3a3 3 0 003-2.77L19 8.08A.998.998 0 0018.08 7zm-1.94 12.08a1 1 0 01-1 .92H8.85a1 1 0 01-1-.92L7.5 14.5a4.77 4.77 0 001.8-.79 4.66 4.66 0 005.4 0 4.77 4.77 0 001.8.79l-.36 4.58zM12 10a3.26 3.26 0 003.25-3.25c0-2.75-2.58-4.51-2.69-4.58a1 1 0 00-1.12 0c-.11.08-2.69 1.83-2.69 4.58A3.26 3.26 0 0012 10zm0-5.7a3.61 3.61 0 011.25 2.45 1.25 1.25 0 01-2.5 0A3.66 3.66 0 0112 4.3z"></path>
    </svg>
  );
};

UWaterGlass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWaterGlass.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWaterGlass;
