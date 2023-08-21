import React from 'react';
import PropTypes from 'prop-types';

const UDocumentLayoutLeft = props => {
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
      <path d="M3 12h6a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h4v4H4V6zm9 2h8a1 1 0 100-2h-8a1 1 0 100 2zm0 10H3a1 1 0 000 2h10a1 1 0 000-2zm8-4H3a1 1 0 000 2h18a1 1 0 000-2zm0-4h-8a1 1 0 000 2h8a1 1 0 000-2z"></path>
    </svg>
  );
};

UDocumentLayoutLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDocumentLayoutLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDocumentLayoutLeft;