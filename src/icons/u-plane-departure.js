import React from 'react';
import PropTypes from 'prop-types';

const UPlaneDeparture = props => {
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
      <path d="M22 5.08a3.08 3.08 0 00-5.26-2.18l-2.81 2.81-6.49-2.16a1 1 0 00-1 .24L4.06 6.15a1 1 0 00.29 1.61l5.18 2.35-2.6 2.6-1.71-.86a1 1 0 00-1.16.15l-1.77 1.81a1 1 0 000 1.41l6.49 6.49a1 1 0 001.41 0L12 19.94a1 1 0 00.19-1.16l-.86-1.71 2.6-2.6 2.35 5.18a1 1 0 001.61.29l2.36-2.36a1 1 0 00.24-1l-2.16-6.49 2.77-2.83a3.05 3.05 0 00.9-2.18zm-2.32.77l-3.24 3.24a1 1 0 00-.24 1l2.16 6.48-.9.9-2.35-5.17a1 1 0 00-1.62-.29l-4.12 4.16a1 1 0 00-.19 1.15L10 19l-.56.56-5.03-5.04L5 14l1.71.86a1 1 0 001.15-.19L12 10.51a1 1 0 00-.29-1.62L6.5 6.54l.9-.9 6.48 2.16a1 1 0 001-.24l3.24-3.24a1.071 1.071 0 011.53 0 1 1 0 01.32.76 1.06 1.06 0 01-.29.77z"></path>
    </svg>
  );
};

UPlaneDeparture.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPlaneDeparture.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPlaneDeparture;