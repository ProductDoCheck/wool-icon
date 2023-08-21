import React from 'react';
import PropTypes from 'prop-types';

const UFilter = props => {
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
      <path d="M19 2H5a3 3 0 00-3 3v1.17a3 3 0 00.25 1.2v.06c.141.321.341.613.59.86L9 14.41V21a1 1 0 001 1 1 1 0 00.45-.11l4-2A1 1 0 0015 19v-4.59l6.12-6.12a2.81 2.81 0 00.59-.86v-.06a3 3 0 00.29-1.2V5a3 3 0 00-3-3zm-5.71 11.29A1 1 0 0013 14v4.38l-2 1V14a1 1 0 00-.29-.71L5.41 8h13.18l-5.3 5.29zM20 6H4V5a1 1 0 011-1h14a1 1 0 011 1v1z"></path>
    </svg>
  );
};

UFilter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFilter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFilter;
