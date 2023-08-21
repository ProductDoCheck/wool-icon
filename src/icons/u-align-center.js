import React from 'react';
import PropTypes from 'prop-types';

const UAlignCenter = props => {
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
      <path d="M3 7h18a1 1 0 100-2H3a1 1 0 000 2zm4 2a1 1 0 000 2h10a1 1 0 000-2H7zm14 4H3a1 1 0 000 2h18a1 1 0 000-2zm-4 4H7a1 1 0 000 2h10a1 1 0 000-2z"></path>
    </svg>
  );
};

UAlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAlignCenter;
