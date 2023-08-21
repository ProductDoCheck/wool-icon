import React from 'react';
import PropTypes from 'prop-types';

const UBug = props => {
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
      <path d="M19 14h2a1 1 0 000-2h-2v-1a5.15 5.15 0 00-.21-1.36A5 5 0 0022 5a1 1 0 00-2 0 3 3 0 01-2.14 2.87A5 5 0 0016 6.4c.01-.133.01-.267 0-.4a4 4 0 10-8 0 2.58 2.58 0 000 .4 5 5 0 00-1.9 1.47A3 3 0 014 5a1 1 0 00-2 0 5 5 0 003.21 4.64c-.13.442-.201.9-.21 1.36v1H3a1 1 0 000 2h2v1a7 7 0 00.14 1.38A5 5 0 002 21a1 1 0 102 0 3 3 0 011.81-2.74 7 7 0 0012.38 0A3 3 0 0120 21a1 1 0 002 0 5 5 0 00-3.14-4.62c.092-.454.14-.916.14-1.38v-1zm-8 5.9A5 5 0 017 15v-4a3 3 0 013-3h1v11.9zM10 6a2 2 0 114 0h-4zm7 9a5 5 0 01-4 4.9V8h1a3 3 0 013 3v4z"></path>
    </svg>
  );
};

UBug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBug.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBug;
