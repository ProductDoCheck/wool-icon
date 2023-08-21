import React from 'react';
import PropTypes from 'prop-types';

const UAlignRight = props => {
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
      <path d="M3 7h18a1 1 0 100-2H3a1 1 0 000 2zm18 10H7a1 1 0 000 2h14a1 1 0 000-2zm0-8H7a1 1 0 000 2h14a1 1 0 000-2zm0 4H3a1 1 0 000 2h18a1 1 0 000-2z"></path>
    </svg>
  );
};

UAlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAlignRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAlignRight;