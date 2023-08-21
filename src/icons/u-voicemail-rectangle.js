import React from 'react';
import PropTypes from 'prop-types';

const UVoicemailRectangle = props => {
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
      <path d="M20 4H4a3 3 0 00-3 3v10a3 3 0 003 3h16a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h16a1 1 0 011 1v10zm-5-8a3 3 0 00-2.82 4h-2.36A3 3 0 108 15h8a3 3 0 000-6zm-8 4a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z"></path>
    </svg>
  );
};

UVoicemailRectangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVoicemailRectangle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVoicemailRectangle;
