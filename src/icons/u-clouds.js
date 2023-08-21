import React from 'react';
import PropTypes from 'prop-types';

const UClouds = props => {
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
      <path d="M19.47 10.54A6 6 0 0014 7a5.82 5.82 0 00-1.39.18 5 5 0 00-9 2A3 3 0 004.5 15h1c-.01.166-.01.334 0 .5A3.5 3.5 0 009 19h9.17a4.33 4.33 0 001.3-8.46zM4.5 13a1 1 0 010-2 1 1 0 001-1 3 3 0 013-3 3 3 0 012.22 1 6 6 0 00-2.66 4.13 3.49 3.49 0 00-1.5.87H4.5zm13.67 4H9a1.5 1.5 0 110-3 1 1 0 001-1 4 4 0 017.78-1.29 1.001 1.001 0 00.78.67 2.33 2.33 0 01-.39 4.62z"></path>
    </svg>
  );
};

UClouds.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UClouds.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UClouds;
