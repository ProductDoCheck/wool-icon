import React from 'react';
import PropTypes from 'prop-types';

const UAlignAlt = props => {
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
      <path d="M10 11H3a1 1 0 000 2h7a1 1 0 000-2zm0 8H3a1 1 0 000 2h7a1 1 0 000-2zm4-14h7a1 1 0 100-2h-7a1 1 0 100 2zm-4 2H3a1 1 0 000 2h7a1 1 0 100-2zm0 8H3a1 1 0 000 2h7a1 1 0 000-2zm0-12H7a1 1 0 000 2h3a1 1 0 100-2zm11 4h-7a1 1 0 100 2h7a1 1 0 100-2zm0 4h-7a1 1 0 000 2h7a1 1 0 000-2zm-4 8h-3a1 1 0 000 2h3a1 1 0 000-2zm4-4h-7a1 1 0 000 2h7a1 1 0 000-2z"></path>
    </svg>
  );
};

UAlignAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAlignAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAlignAlt;
