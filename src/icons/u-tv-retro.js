import React from 'react';
import PropTypes from 'prop-types';

const UTvRetro = props => {
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
      <path d="M18 6h-3.59l2.3-2.29A1.005 1.005 0 0016 1.996c-.266 0-.522.106-.71.294L12 5.54l-1.17-2a1.004 1.004 0 00-1.74 1L10 6H6a3 3 0 00-3 3v8a3 3 0 003 3v1a1 1 0 102 0v-1h8v1a1 1 0 102 0v-1a3 3 0 003-3V9a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 011-1h12a1 1 0 011 1v8z"></path>
    </svg>
  );
};

UTvRetro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTvRetro.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTvRetro;
