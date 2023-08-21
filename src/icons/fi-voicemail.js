import React from 'react';
import PropTypes from 'prop-types';

const FiVoicemail = props => {
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
      <path d="M5.5 16h13"></path>
      <path d="M18.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"></path>
      <path d="M5.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"></path>
    </svg>
  );
};

FiVoicemail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiVoicemail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiVoicemail;
