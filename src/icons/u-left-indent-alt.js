import React from 'react';
import PropTypes from 'prop-types';

const ULeftIndentAlt = props => {
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
      <path d="M9 5a1 1 0 00-1 1v12a1 1 0 102 0V6a1 1 0 00-1-1zm4 2h8a1 1 0 100-2h-8a1 1 0 100 2zM5.77 9.69a1 1 0 00-1.41-.13l-2 1.67a1 1 0 000 1.54l2 1.67a1.001 1.001 0 101.28-1.54L4.56 12l1.08-.9a.999.999 0 00.13-1.41zM21 9h-8a1 1 0 100 2h8a1 1 0 000-2zm0 4h-8a1 1 0 000 2h8a1 1 0 000-2zm0 4h-8a1 1 0 000 2h8a1 1 0 000-2z"></path>
    </svg>
  );
};

ULeftIndentAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULeftIndentAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULeftIndentAlt;
