import React from 'react';
import PropTypes from 'prop-types';

const UImageBroken = props => {
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
      <path d="M21.71 14.54L19.21 12a1.002 1.002 0 00-1.42 0L15 14.84 12.21 12a1.002 1.002 0 00-1.42 0L8.5 14.34 6.21 12a1 1 0 00-1.42 0l-2.5 2.5a1 1 0 00-.21.33 1 1 0 00-.08.38V19a3 3 0 003 3h14a3 3 0 003-3v-3.75a1.001 1.001 0 00-.08-.38 1 1 0 00-.21-.33zM20 19a1 1 0 01-1 1H5a1 1 0 01-1-1v-3.34l1.5-1.5 2.29 2.3a1.001 1.001 0 001.42 0l2.29-2.3L14.29 17a1.002 1.002 0 001.42 0l2.79-2.8 1.5 1.5V19zM19 2H5a3 3 0 00-3 3v5.26c-.01.09-.01.18 0 .27v.1a1 1 0 001.66.31L5.5 9.16l2.29 2.3a1.001 1.001 0 001.42 0l2.29-2.3L14.29 12a1.002 1.002 0 001.42 0l2.79-2.8 1.77 1.78a1 1 0 001.66-.31.277.277 0 000-.09.879.879 0 00.06-.28V5A3 3 0 0019 2zm1 5.84L19.21 7a1 1 0 00-1.42 0L15 9.84 12.21 7a1 1 0 00-1.42 0L8.5 9.34 6.21 7a1 1 0 00-1.42 0L4 7.84V5a1 1 0 011-1h14a1 1 0 011 1v2.84z"></path>
    </svg>
  );
};

UImageBroken.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageBroken.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageBroken;
