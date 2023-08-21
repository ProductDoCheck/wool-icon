import React from 'react';
import PropTypes from 'prop-types';

const UBookReader = props => {
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
      <path d="M20.18 10.19c-.72-.13-1.449-.194-2.18-.19-.42 0-.83 0-1.24.08a5.91 5.91 0 00-1.91-1.65 3.81 3.81 0 001-2.57 3.86 3.86 0 00-7.72 0 3.81 3.81 0 001 2.57 6.11 6.11 0 00-1.91 1.64C6.83 10 6.42 10 6 10c-.732.003-1.461.073-2.18.21a1 1 0 00-.82 1v8.25a1 1 0 00.745.971 1 1 0 00.435.019A9.752 9.752 0 016 20.23a9.89 9.89 0 015.45 1.63l.13.05c.133.058.275.088.42.09a.87.87 0 00.28-.05h.07l.13-.05A9.89 9.89 0 0118 20.23c.611.003 1.22.063 1.82.18a1 1 0 00.82-.22 1 1 0 00.36-.77v-8.25a1 1 0 00-.82-.98zM12 4a1.86 1.86 0 010 3.71A1.86 1.86 0 0112 4zm-1 15.33a11.92 11.92 0 00-5-1.1c-.33 0-.66 0-1 .05V12a9.63 9.63 0 012.52.05h.11A10 10 0 0111 13.33v6zm1-7.73a11.773 11.773 0 00-1.38-.68h-.06c-.33-.13-.66-.26-1-.36A4 4 0 0112 9.69a4 4 0 012.44.85A12.43 12.43 0 0012 11.6zm7 6.68a11.6 11.6 0 00-6 1v-6a9.761 9.761 0 013.37-1.22h.2A9.389 9.389 0 0119 12v6.28z"></path>
    </svg>
  );
};

UBookReader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBookReader.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBookReader;
