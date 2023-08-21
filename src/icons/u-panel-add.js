import React from 'react';
import PropTypes from 'prop-types';

const UPanelAdd = props => {
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
      <path d="M18 10h-4V3a1 1 0 00-1-1H8a1 1 0 00-1 1v5H3a1 1 0 00-1 1v12a1 1 0 001 1h15a1 1 0 001-1V11a1 1 0 00-1-1zM7 20H4V10h3v10zm5 0H9V4h3v16zm5 0h-3v-8h3v8zm4-16h-1V3a1 1 0 00-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 002 0V6h1a1 1 0 100-2z"></path>
    </svg>
  );
};

UPanelAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPanelAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPanelAdd;
