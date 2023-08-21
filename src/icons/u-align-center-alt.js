import React from 'react';
import PropTypes from 'prop-types';

const UAlignCenterAlt = props => {
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
      <path d="M5 8h14a1 1 0 100-2H5a1 1 0 000 2zm16 3H3a1 1 0 000 2h18a1 1 0 000-2zm-2 5H5a1 1 0 000 2h14a1 1 0 000-2z"></path>
    </svg>
  );
};

UAlignCenterAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAlignCenterAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAlignCenterAlt;
