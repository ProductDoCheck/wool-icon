import React from 'react';
import PropTypes from 'prop-types';

const UCompress = props => {
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
      <path d="M16 9h5a1 1 0 100-2h-4V3a1 1 0 00-2 0v5a1 1 0 001 1zm-8 6H3a1 1 0 000 2h4v4a1 1 0 102 0v-5a1 1 0 00-1-1zM8 2a1 1 0 00-1 1v4H3a1 1 0 000 2h5a1 1 0 001-1V3a1 1 0 00-1-1zm13 13h-5a1 1 0 00-1 1v5a1 1 0 002 0v-4h4a1 1 0 000-2z"></path>
    </svg>
  );
};

UCompress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCompress.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCompress;
