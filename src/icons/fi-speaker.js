import React from 'react';
import PropTypes from 'prop-types';

const FiSpeaker = props => {
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
      <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z"></path>
      <path d="M12 18a4 4 0 100-8 4 4 0 000 8z"></path>
      <path d="M12 6h.01"></path>
    </svg>
  );
};

FiSpeaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiSpeaker.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiSpeaker;
