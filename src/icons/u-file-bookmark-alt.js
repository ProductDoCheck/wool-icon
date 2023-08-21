import React from 'react';
import PropTypes from 'prop-types';

const UFileBookmarkAlt = props => {
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
      <path d="M7.5 10h1a1 1 0 000-2h-1a1 1 0 000 2zm4 6h-4a1 1 0 000 2h4a1 1 0 000-2zm0-4h-4a1 1 0 000 2h4a1 1 0 000-2zm6.92-2.62a1 1 0 00-.21-1.09l-6-6a1.071 1.071 0 00-.28-.19.32.32 0 00-.09 0l-.28-.1H5.5a3 3 0 00-3 3v14a3 3 0 003 3h6a1 1 0 000-2h-6a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h4a1 1 0 00.92-.62zM13.5 8a1 1 0 01-1-1V5.41L15.09 8H13.5zm7 4h-5a1 1 0 00-1 1v8a1 1 0 00.53.88 1 1 0 001-.05l1.97-1.3 2 1.3a1 1 0 001.5-.83v-8a1 1 0 00-1-1zm-1 7.12l-.94-.63a1 1 0 00-1.12 0l-.94.63V14h3v5.12z"></path>
    </svg>
  );
};

UFileBookmarkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileBookmarkAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileBookmarkAlt;
