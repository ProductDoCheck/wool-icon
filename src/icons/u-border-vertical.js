import React from 'react';
import PropTypes from 'prop-types';

const UBorderVertical = props => {
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
      <path d="M3 3a1 1 0 100 2 1 1 0 000-2zm0 4a1 1 0 100 2 1 1 0 000-2zm16-2a1 1 0 100-2 1 1 0 000 2zM7 11a1 1 0 100 2.001A1 1 0 007 11zm0 8a1 1 0 100 2 1 1 0 000-2zM7 3a1 1 0 100 2 1 1 0 000-2zM3 15a1 1 0 100 2.001A1 1 0 003 15zm0-4a1 1 0 100 2.001A1 1 0 003 11zm0 8a1 1 0 100 2 1 1 0 000-2zm16-4a1 1 0 100 2.002A1 1 0 0019 15zm0-4a1 1 0 100 2.002A1 1 0 0019 11zm0 8a1 1 0 100 2 1 1 0 000-2zm0-12a1 1 0 100 2 1 1 0 000-2zm-4-4a1 1 0 100 2 1 1 0 000-2zm-4 0a1 1 0 00-1 1v16a1 1 0 002 0V4a1 1 0 00-1-1zm4 16a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2.002A1 1 0 0015 11z"></path>
    </svg>
  );
};

UBorderVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBorderVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBorderVertical;
