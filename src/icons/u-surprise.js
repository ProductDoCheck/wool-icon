import React from 'react';
import PropTypes from 'prop-types';

const USurprise = props => {
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
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zM10 9a1 1 0 10-2 0 1 1 0 002 0zm5-1a1 1 0 100 2 1 1 0 000-2zm-3 3a3.39 3.39 0 00-3.25 3.5A3.39 3.39 0 0012 18a3.39 3.39 0 003.25-3.5A3.39 3.39 0 0012 11zm0 5a1.39 1.39 0 01-1.25-1.5A1.39 1.39 0 0112 13a1.39 1.39 0 011.25 1.5A1.39 1.39 0 0112 16z"></path>
    </svg>
  );
};

USurprise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USurprise.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USurprise;
