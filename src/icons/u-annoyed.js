import React from 'react';
import PropTypes from 'prop-types';

const UAnnoyed = props => {
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
      <path d="M9 9a1 1 0 100 2 1 1 0 000-2zm6 4a5 5 0 00-4.37 2.57 1 1 0 00.37 1.36 1 1 0 00.994-.007 1 1 0 00.366-.373A3 3 0 0115 15a1 1 0 000-2zm0-4a1 1 0 100 2 1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UAnnoyed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAnnoyed.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAnnoyed;
