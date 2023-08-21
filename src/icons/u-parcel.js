import React from 'react';
import PropTypes from 'prop-types';

const UParcel = props => {
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
      <path d="M7 14h2a1 1 0 000-2H7a1 1 0 000 2zm6 2H7a1 1 0 000 2h6a1 1 0 000-2zm6-14H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm-5 2v3.29l-1.51-.84a1 1 0 00-1 0L10 7.29V4h4zm6 15a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3v5a1 1 0 001.5.86L12 8.47l2.51 1.4a1 1 0 001.197-.163A1 1 0 0016 9V4h3a1 1 0 011 1v14z"></path>
    </svg>
  );
};

UParcel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UParcel.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UParcel;
