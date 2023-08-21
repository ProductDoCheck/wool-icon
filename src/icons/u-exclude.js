import React from 'react';
import PropTypes from 'prop-types';

const UExclude = props => {
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
      <path d="M9.54 7.54h-1a1 1 0 00-1 1v1a1 1 0 102 0 1 1 0 100-2zm5.92 5.92a1 1 0 00-1 1 1 1 0 000 2h1a1.001 1.001 0 001-1v-1a1 1 0 00-1-1zM21 7.54h-4.54V3a1 1 0 00-1-1H3a1 1 0 00-1 1v12.46a1 1 0 001 1h4.54V21a1 1 0 001 1H21a1 1 0 001-1V8.54a1 1 0 00-1-1zM20 20H9.54v-3.54a1 1 0 000-2 1 1 0 10-2 0H4V4h10.46v3.54a1 1 0 100 2 1 1 0 002 0H20V20z"></path>
    </svg>
  );
};

UExclude.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExclude.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExclude;
