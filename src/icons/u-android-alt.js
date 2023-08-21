import React from 'react';
import PropTypes from 'prop-types';

const UAndroidAlt = props => {
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
      <path d="M2.992 9a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm18 0a1 1 0 00-1 1v4a1 1 0 102 0v-4a1.001 1.001 0 00-1-1zm-4.135-5.5a1 1 0 10-1.731-1l-.614 1.063a5.927 5.927 0 00-5.04 0L8.857 2.5a1 1 0 10-1.731 1l.692 1.198A5.979 5.979 0 005.992 9v8a1 1 0 001 1h2v3a1 1 0 102 0v-3h2v3a1 1 0 102 0v-3h2a1 1 0 001-1V9a5.978 5.978 0 00-1.827-4.302l.692-1.198zM15.992 16h-8v-5h8v5zm-8-7a4 4 0 018 0h-8z"></path>
    </svg>
  );
};

UAndroidAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAndroidAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAndroidAlt;
