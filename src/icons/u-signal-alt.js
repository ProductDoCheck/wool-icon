import React from 'react';
import PropTypes from 'prop-types';

const USignalAlt = props => {
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
      <path d="M10 14a1 1 0 00-1 1v6a1 1 0 102 0v-6a1 1 0 00-1-1zm-5 4a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zM20 2a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1zm-5 7a1 1 0 00-1 1v11a1 1 0 002 0V10a1 1 0 00-1-1z"></path>
    </svg>
  );
};

USignalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USignalAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USignalAlt;
