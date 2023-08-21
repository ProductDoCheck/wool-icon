import React from 'react';
import PropTypes from 'prop-types';

const FiLayers = props => {
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
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    </svg>
  );
};

FiLayers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiLayers.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiLayers;
