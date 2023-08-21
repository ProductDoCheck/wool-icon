import React from 'react';
import PropTypes from 'prop-types';

const ULayersAlt = props => {
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
      <path d="M21 2H9a1 1 0 00-1 1v4H6a1 1 0 00-1 1v4H3a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-2h4a1 1 0 001-1v-2h4a1 1 0 001-1V3a1 1 0 00-1-1zM10 20H4v-6h6v6zm5-3h-3v-4a1 1 0 00-1-1H7V9h8v8zm5-3h-3V8a1 1 0 00-1-1h-6V4h10v10z"></path>
    </svg>
  );
};

ULayersAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULayersAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULayersAlt;
