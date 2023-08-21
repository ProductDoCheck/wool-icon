import React from 'react';
import PropTypes from 'prop-types';

const UWrench = props => {
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
      <path d="M21.71 15.58l-4.52-4.51c.095-.46.141-.93.14-1.4A7.67 7.67 0 006.42 2.72a1 1 0 00-.29 1.62l4.35 4.34-1.8 1.8-4.34-4.35a1 1 0 00-.88-.27 1 1 0 00-.74.56 7.67 7.67 0 007 10.91c.47.001.94-.045 1.4-.14l4.51 4.52a1.002 1.002 0 001.639-.326 1 1 0 00-.219-1.094l-4.9-4.9a1 1 0 00-.95-.26 5.88 5.88 0 01-1.48.2A5.671 5.671 0 014 9.67c-.001-.335.025-.67.08-1L8 12.6a1.001 1.001 0 001.42 0l3.18-3.21a1 1 0 000-1.39L8.71 4.08c.33-.054.665-.08 1-.08a5.67 5.67 0 015.66 5.67c-.003.5-.07.997-.2 1.48a1 1 0 00.26.95l4.9 4.9a1.004 1.004 0 101.42-1.42h-.04z"></path>
    </svg>
  );
};

UWrench.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWrench.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWrench;
