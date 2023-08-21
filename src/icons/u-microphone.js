import React from 'react';
import PropTypes from 'prop-types';

const UMicrophone = props => {
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
      <path d="M12 15a4 4 0 004-4V5a4 4 0 10-8 0v6a4 4 0 004 4zM10 5a2 2 0 114 0v6a2 2 0 01-4 0V5zm10 6a1 1 0 00-2 0 6 6 0 11-12 0 1 1 0 10-2 0 8 8 0 007 7.93V21H9a1 1 0 000 2h6a1 1 0 000-2h-2v-2.07A8 8 0 0020 11z"></path>
    </svg>
  );
};

UMicrophone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMicrophone.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMicrophone;
