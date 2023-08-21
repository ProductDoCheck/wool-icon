import React from 'react';
import PropTypes from 'prop-types';

const ULeftIndent = props => {
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
      <path d="M3 7h18a1 1 0 100-2H3a1 1 0 000 2zm0 4h10a1 1 0 000-2H3a1 1 0 000 2zm18.77-1.31a1 1 0 00-1.41-.12l-2 1.66a1 1 0 000 1.54l2 1.66a1 1 0 00.64.24 1.001 1.001 0 00.64-1.77l-1.08-.9 1.08-.9a.997.997 0 00.13-1.41zM21 17H3a1 1 0 000 2h18a1 1 0 000-2zM3 15h10a1 1 0 000-2H3a1 1 0 000 2z"></path>
    </svg>
  );
};

ULeftIndent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULeftIndent.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULeftIndent;
