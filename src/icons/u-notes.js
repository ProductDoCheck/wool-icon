import React from 'react';
import PropTypes from 'prop-types';

const UNotes = props => {
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
      <path d="M16 14H8a1 1 0 000 2h8a1 1 0 000-2zm0-4h-6a1 1 0 000 2h6a1 1 0 000-2zm4-6h-3V3a1 1 0 00-2 0v1h-2V3a1 1 0 00-2 0v1H9V3a1 1 0 00-2 0v1H4a1 1 0 00-1 1v14a3 3 0 003 3h12a3 3 0 003-3V5a1 1 0 00-1-1zm-1 15a1 1 0 01-1 1H6a1 1 0 01-1-1V6h2v1a1 1 0 002 0V6h2v1a1 1 0 002 0V6h2v1a1 1 0 002 0V6h2v13z"></path>
    </svg>
  );
};

UNotes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UNotes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UNotes;
