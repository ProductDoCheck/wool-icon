import React from 'react';
import PropTypes from 'prop-types';

const FiBookOpen = props => {
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
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z"></path>
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3z"></path>
    </svg>
  );
};

FiBookOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiBookOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiBookOpen;
