import React from 'react';
import PropTypes from 'prop-types';

const UMedicalDrip = props => {
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
      <path d="M17 6h-2V4h2a1 1 0 100-2H9a5 5 0 00-5 5v14a1 1 0 102 0V7a3 3 0 013-3h4v2h-2a3 3 0 00-3 3v4.93a3 3 0 001.34 2.5L11 17.54V18a2 2 0 002 2v1a1 1 0 002 0v-1a2 2 0 002-2v-.46l1.66-1.11a3 3 0 001.34-2.5V9a3 3 0 00-3-3zm-1 5h2v1h-1a1 1 0 000 2h1a1.001 1.001 0 01-.44.76l-2.1 1.41A1 1 0 0015 17v1h-2v-1a1 1 0 00-.45-.83l-2.1-1.41a1 1 0 01-.45-.83V9a1 1 0 011-1h6a1 1 0 011 1h-2a1 1 0 100 2z"></path>
    </svg>
  );
};

UMedicalDrip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMedicalDrip.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMedicalDrip;
