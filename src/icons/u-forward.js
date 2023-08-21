import React from 'react';
import PropTypes from 'prop-types';

const UForward = props => {
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
      <path d="M20.67 9.69L14 5.84a2.67 2.67 0 00-4 2.31L6 5.84a2.67 2.67 0 00-4 2.31v7.7a2.63 2.63 0 001.33 2.3c.405.242.868.37 1.34.37A2.69 2.69 0 006 18.16l4-2.31a2.65 2.65 0 001.33 2.31 2.66 2.66 0 002.67 0l6.67-3.85a2.67 2.67 0 000-4.62zM10 13.54l-5 2.88a.67.67 0 01-1-.57v-7.7a.67.67 0 011-.57l5 2.88v3.08zm9.67-1L13 16.43a.69.69 0 01-.67 0 .66.66 0 01-.33-.58v-7.7a.66.66 0 01.33-.58.78.78 0 01.34-.09.63.63 0 01.33.09l6.67 3.85a.67.67 0 010 1.16v-.04z"></path>
    </svg>
  );
};

UForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UForward;
