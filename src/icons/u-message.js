import React from 'react';
import PropTypes from 'prop-types';

const UMessage = props => {
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
      <path d="M20.34 9.32l-14-7a3 3 0 00-4.08 3.9l2.4 5.37a1.06 1.06 0 010 .82l-2.4 5.37A3 3 0 005 22a3.14 3.14 0 001.35-.32l14-7a3 3 0 000-5.36h-.01zm-.89 3.57l-14 7a1 1 0 01-1.35-1.3l2.39-5.37a2 2 0 00.08-.22h6.89a1 1 0 000-2H6.57a2 2 0 00-.08-.22L4.1 5.41a1 1 0 011.35-1.3l14 7a1 1 0 010 1.78z"></path>
    </svg>
  );
};

UMessage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMessage.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMessage;
