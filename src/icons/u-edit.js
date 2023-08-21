import React from 'react';
import PropTypes from 'prop-types';

const UEdit = props => {
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
      <path d="M21 12a1 1 0 00-1 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h6a1 1 0 100-2H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3v-6a1 1 0 00-1-1zm-15 .76V17a1 1 0 001 1h4.24a.998.998 0 00.71-.29l6.92-6.93L21.71 8a1.001 1.001 0 000-1.42l-4.24-4.29a1 1 0 00-1.42 0l-2.82 2.83-6.94 6.93a1.001 1.001 0 00-.29.71zm10.76-8.35l2.83 2.83-1.42 1.42-2.83-2.83 1.42-1.42zM8 13.17l5.93-5.93 2.83 2.83L10.83 16H8v-2.83z"></path>
    </svg>
  );
};

UEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEdit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEdit;
