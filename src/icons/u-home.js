import React from 'react';
import PropTypes from 'prop-types';

const UHome = props => {
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
      <path d="M21.66 10.25l-9-8a1 1 0 00-1.32 0l-9 8A1 1 0 003 12h1v9a1 1 0 001 1h14a1 1 0 001-1v-9h1a1 1 0 00.66-1.75zM13 20h-2v-3a1 1 0 012 0v3zm5 0h-3v-3a3 3 0 00-6 0v3H6v-8h12v8zM5.63 10L12 4.34 18.37 10H5.63z"></path>
    </svg>
  );
};

UHome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHome.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHome;
