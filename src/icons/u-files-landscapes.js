import React from 'react';
import PropTypes from 'prop-types';

const UFilesLandscapes = props => {
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
      <path d="M23 9.94a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19h-.09a.88.88 0 00-.33-.11H8a3 3 0 00-3 3v1H4a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-1h1a3 3 0 003-3v-4-.06zm-6-3.53L19.59 9H18a1 1 0 01-1-1V6.41zM17 18a1 1 0 01-1 1H4a1 1 0 01-1-1v-8a1 1 0 011-1h1v5a3 3 0 003 3h9v1zm4-4a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1h7v3a3 3 0 003 3h3v3z"></path>
    </svg>
  );
};

UFilesLandscapes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFilesLandscapes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFilesLandscapes;
