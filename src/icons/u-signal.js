import React from 'react';
import PropTypes from 'prop-types';

const USignal = props => {
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
      <path d="M6 15a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm4-3a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm8-8a1 1 0 00-1 1v14a1 1 0 002 0V5a1 1 0 00-1-1zm-4 4a1 1 0 00-1 1v10a1 1 0 002 0V9a1 1 0 00-1-1z"></path>
    </svg>
  );
};

USignal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USignal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USignal;
