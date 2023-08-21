import React from 'react';
import PropTypes from 'prop-types';

const UFacebook = props => {
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
      <path d="M20.9 2H3.1A1.1 1.1 0 002 3.1v17.8A1.1 1.1 0 003.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 013.88-4 20.26 20.26 0 012.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.102 1.102 0 001.1-1.1V3.1A1.101 1.101 0 0020.9 2z"></path>
    </svg>
  );
};

UFacebook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFacebook.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFacebook;