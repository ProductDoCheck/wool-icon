import React from 'react';
import PropTypes from 'prop-types';

const UGoogleDrive = props => {
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
      <path d="M21.423 13.888l-6.09-10.55H8.668l6.09 10.55h6.666zM8.09 4.338L2 14.888l3.334 5.774 6.089-10.55-3.334-5.774zm1.733 10.55l-3.333 5.774h12.178L22 14.887H9.822z"></path>
    </svg>
  );
};

UGoogleDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGoogleDrive.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGoogleDrive;
