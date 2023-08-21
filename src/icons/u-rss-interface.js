import React from 'react';
import PropTypes from 'prop-types';

const URssInterface = props => {
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
      <path d="M3 14a1 1 0 000 2 3 3 0 013 3 1 1 0 102 0 5 5 0 00-5-5zm-.71 4.29a1 1 0 101.42 1.409 1 1 0 00-1.42-1.409zM19 4H5a3 3 0 00-3 3 1 1 0 002 0 1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-4a1 1 0 000 2h4a3 3 0 003-3V7a3 3 0 00-3-3zM3 10a1 1 0 000 2 7 7 0 017 7 1 1 0 002 0 9 9 0 00-9-9z"></path>
    </svg>
  );
};

URssInterface.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URssInterface.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URssInterface;
