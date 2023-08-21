import React from 'react';
import PropTypes from 'prop-types';

const UTape = props => {
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
      <path d="M14.5 7a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm1-10h-2a7 7 0 00-7 7v3h-1a1 1 0 000 2h1v2h-4a1 1 0 00-1 1v2a1 1 0 102 0v-1h12a7 7 0 007-7v-2a7 7 0 00-7-7zm5 9a5 5 0 01-5 5h-7v-7a5 5 0 015-5h2a5 5 0 015 5v2z"></path>
    </svg>
  );
};

UTape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTape.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTape;
