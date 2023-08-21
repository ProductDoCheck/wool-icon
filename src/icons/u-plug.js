import React from 'react';
import PropTypes from 'prop-types';

const UPlug = props => {
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
      <path d="M19 6h-3V3a1 1 0 00-2 0v3h-4V3a1 1 0 00-2 0v3H5a1 1 0 000 2h1v5a1 1 0 00.29.71L9 16.41V21a1 1 0 102 0v-4h2v4a1 1 0 002 0v-4.59l2.71-2.7A1 1 0 0018 13V8h1a1 1 0 100-2zm-3 6.59L13.59 15h-3.18L8 12.59V8h8v4.59zM11 13h2a1 1 0 000-2h-2a1 1 0 000 2z"></path>
    </svg>
  );
};

UPlug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPlug.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPlug;
