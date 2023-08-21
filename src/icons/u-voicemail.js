import React from 'react';
import PropTypes from 'prop-types';

const UVoicemail = props => {
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
      <path d="M18 8a4 4 0 00-4 4 3.91 3.91 0 00.56 2H9.44a3.91 3.91 0 00.56-2 4 4 0 10-4 4h12a4 4 0 100-8zM6 14a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

UVoicemail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVoicemail.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVoicemail;
