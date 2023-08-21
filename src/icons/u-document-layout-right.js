import React from 'react';
import PropTypes from 'prop-types';

const UDocumentLayoutRight = props => {
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
      <path d="M13 18H3a1 1 0 000 2h10a1 1 0 000-2zM3 8h8a1 1 0 100-2H3a1 1 0 000 2zm0 4h8a1 1 0 000-2H3a1 1 0 000 2zm18 2H3a1 1 0 000 2h18a1 1 0 000-2zm0-10h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1zm-1 6h-4V6h4v4z"></path>
    </svg>
  );
};

UDocumentLayoutRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDocumentLayoutRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDocumentLayoutRight;
