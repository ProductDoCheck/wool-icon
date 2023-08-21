import React from 'react';
import PropTypes from 'prop-types';

const UNewspaper = props => {
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
      <path d="M17 11h-1a1 1 0 000 2h1a1 1 0 000-2zm0 4h-1a1 1 0 000 2h1a1 1 0 000-2zm-6-6h6a1 1 0 100-2h-6a1 1 0 100 2zm10-6H7a1 1 0 00-1 1v3H3a1 1 0 00-1 1v10a3 3 0 003 3h13a4 4 0 004-4V4a1 1 0 00-1-1zM6 18a1 1 0 11-2 0V9h2v9zm14-1a2 2 0 01-2 2H7.82A3 3 0 008 18V5h12v12zm-9-4h1a1 1 0 000-2h-1a1 1 0 000 2zm0 4h1a1 1 0 000-2h-1a1 1 0 000 2z"></path>
    </svg>
  );
};

UNewspaper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UNewspaper.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UNewspaper;
