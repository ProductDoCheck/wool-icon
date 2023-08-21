import React from 'react';
import PropTypes from 'prop-types';

const UFlipVAlt = props => {
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
      <path d="M4.94 12.24a1 1 0 00-1.21.76l-.49 1.94A1 1 0 004 16.12a1 1 0 001.21-.73l.49-1.94a1 1 0 00-.76-1.21zm17 7.52l-4-16A1 1 0 0017 3h-3a1 1 0 00-1 1v16a1 1 0 001 1h7a1 1 0 00.79-.38 1 1 0 00.21-.86h-.06zM15 19V5h1.22l3.5 14H15zM6.4 6.42a1 1 0 00-1.22.73L4.7 9.09a1 1 0 00.73 1.21h.24a1 1 0 001-.76l.48-1.94a1 1 0 00-.75-1.18zM7.51 5h2a1 1 0 000-2h-2a1 1 0 000 2zM4.24 19a1.007 1.007 0 00-2-.24l-.24 1a1 1 0 00.18.86A1 1 0 003 21h1a1.007 1.007 0 00.24-2zM10 6.51a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zm0 6a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1zm0 6a1 1 0 00-.86.49H8a1 1 0 000 2h2a1 1 0 001-1v-.49a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UFlipVAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFlipVAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFlipVAlt;
