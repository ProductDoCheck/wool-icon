import React from 'react';
import PropTypes from 'prop-types';

const UImageMinus = props => {
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
      <path d="M21 3h-4a1 1 0 100 2h4a1 1 0 100-2zm-2 4a1 1 0 00-1 1v5.39l-1.48-1.48a2.79 2.79 0 00-3.93 0l-.7.7-2.48-2.49a2.79 2.79 0 00-3.93 0L4 11.61V6a1 1 0 011-1h8a1 1 0 100-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V8a1 1 0 00-1-1zM5 19a1 1 0 01-1-1v-3.57l2.9-2.89a.79.79 0 011.09 0l3.17 3.17L15.45 19H5zm13-1a1 1 0 01-.18.54L13.31 14l.7-.69a.77.77 0 011.1 0L18 16.22V18z"></path>
    </svg>
  );
};

UImageMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageMinus;
