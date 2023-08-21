import React from 'react';
import PropTypes from 'prop-types';

const UGoogleDriveAlt = props => {
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
      <path d="M22 14.44a.614.614 0 000-.13.617.617 0 010-.12l-.05-.12-6-10.29a1 1 0 00-.95-.49H9a1 1 0 00-.5.13l-.11.08a.73.73 0 00-.09.08.58.58 0 00-.1.12l-.06.08-6 10.33a1 1 0 000 1l3 5.08c.031.054.068.104.11.15v.06c.124.12.275.21.44.26.073.01.147.01.22 0H18a1 1 0 00.86-.49l3-5.14.05-.12a.617.617 0 010-.12.524.524 0 000-.13.505.505 0 000-.13.59.59 0 00.09-.09zM6 17.73l-1.79-3.1L9 6.27l.87 1.5 1 1.66L7 15.91l-1 1.82zm6-6.32l1.26 2.16h-2.54L12 11.41zm5.43 7.3H7.7l1.84-3.14h9.72l-1.83 3.14zm-1.86-5.14l-4.83-8.28h3.69l4.83 8.28h-3.69z"></path>
    </svg>
  );
};

UGoogleDriveAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGoogleDriveAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGoogleDriveAlt;
