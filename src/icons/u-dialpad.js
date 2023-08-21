import React from 'react';
import PropTypes from 'prop-types';

const UDialpad = props => {
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
      <path d="M7 2.25H3a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4A.76.76 0 007.75 7V3A.76.76 0 007 2.25zm-.75 4h-2.5v-2.5h2.5v2.5zm14.75-4h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75V3a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5v2.5zm-6.25-4h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75V3a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5v2.5zM7 9.25H3a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75v-4A.76.76 0 007 9.25zm-.75 4h-2.5v-2.5h2.5v2.5zm7.75-4h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75v-4a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5v2.5zm7.75-4h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75v-4a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5v2.5zm-6.25 3h-4a.76.76 0 00-.75.75v4a.76.76 0 00.75.75h4a.76.76 0 00.75-.75v-4a.76.76 0 00-.75-.75zm-.75 4h-2.5v-2.5h2.5v2.5z"></path>
    </svg>
  );
};

UDialpad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDialpad.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDialpad;
