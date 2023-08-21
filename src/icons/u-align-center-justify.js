import React from 'react';
import PropTypes from 'prop-types';

const UAlignCenterJustify = props => {
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
      <path d="M21 15H3a1 1 0 000 2h18a1 1 0 000-2zM3 5h18a1 1 0 100-2H3a1 1 0 000 2zm14 14H7a1 1 0 000 2h10a1 1 0 000-2zm4-12H3a1 1 0 000 2h18a1 1 0 100-2zm0 4H3a1 1 0 000 2h18a1 1 0 000-2z"></path>
    </svg>
  );
};

UAlignCenterJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAlignCenterJustify.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAlignCenterJustify;
