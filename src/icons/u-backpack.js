import React from 'react';
import PropTypes from 'prop-types';

const UBackpack = props => {
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
      <path d="M13 10h-2a1 1 0 000 2h2a1 1 0 000-2zm5 0a4 4 0 00-3-3.86V5a3 3 0 00-6 0v1.14A4 4 0 006 10a4 4 0 00-4 4v3a3 3 0 003 3h1.18A3 3 0 009 22h6a3 3 0 002.82-2H19a3 3 0 003-3v-3a4 4 0 00-4-4zM6 18H5a1 1 0 01-1-1v-3a2 2 0 012-2v6zm5-13a1 1 0 012 0v1h-2V5zm5 14a1 1 0 01-1 1H9a1 1 0 01-1-1v-1a2 2 0 012-2h4a2 2 0 012 2v1zm0-4.44a3.91 3.91 0 00-2-.56h-4a3.91 3.91 0 00-2 .56V10a2 2 0 012-2h4a2 2 0 012 2v4.56zM20 17a1 1 0 01-1 1h-1v-6a2 2 0 012 2v3z"></path>
    </svg>
  );
};

UBackpack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBackpack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBackpack;