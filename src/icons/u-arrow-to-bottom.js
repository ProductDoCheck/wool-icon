import React from 'react';
import PropTypes from 'prop-types';

const UArrowToBottom = props => {
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
      <path d="M19 20H5a1 1 0 000 2h14a1 1 0 000-2zm-7.71-2.29a1 1 0 00.33.21.94.94 0 00.76 0 1 1 0 00.33-.21l4-4a1.004 1.004 0 10-1.42-1.42L13 14.59V3a1 1 0 00-2 0v11.59l-2.29-2.3a1.005 1.005 0 00-1.714.71 1.004 1.004 0 00.294.71l4 4z"></path>
    </svg>
  );
};

UArrowToBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UArrowToBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UArrowToBottom;
