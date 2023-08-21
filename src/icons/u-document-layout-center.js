import React from 'react';
import PropTypes from 'prop-types';

const UDocumentLayoutCenter = props => {
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
      <path d="M9 12h6a1 1 0 001-1V5a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h4v4h-4V6zm11 4h-2a1 1 0 000 2h2a1 1 0 000-2zm-2-2h2a1 1 0 100-2h-2a1 1 0 100 2zM3 8h2a1 1 0 000-2H3a1 1 0 000 2zm0 4h2a1 1 0 000-2H3a1 1 0 000 2zm18 2H3a1 1 0 000 2h18a1 1 0 000-2zm-8 4H3a1 1 0 000 2h10a1 1 0 000-2z"></path>
    </svg>
  );
};

UDocumentLayoutCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDocumentLayoutCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDocumentLayoutCenter;
