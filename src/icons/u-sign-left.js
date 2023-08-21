import React from 'react';
import PropTypes from 'prop-types';

const USignLeft = props => {
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
      <path d="M16 5h-3V3a1 1 0 00-2 0v2H6a1 1 0 00-.78.38l-2 2.5a1 1 0 000 1.24l2 2.5A1 1 0 006 12h5v8H9a1 1 0 000 2h6a1 1 0 000-2h-2v-8h3a1 1 0 001-1V6a1 1 0 00-1-1zm-1 5H6.48l-1.2-1.5L6.48 7H15v3z"></path>
    </svg>
  );
};

USignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

USignLeft.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default USignLeft;
