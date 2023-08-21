import React from 'react';
import PropTypes from 'prop-types';

const UAlignLetterRight = props => {
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
      <path d="M10 4h11a1 1 0 100-2H10a1 1 0 000 2zm11 16H3a1 1 0 000 2h18a1 1 0 000-2zm0-14H3a1 1 0 000 2h18a1 1 0 100-2zm0 10H11a1 1 0 000 2h10a1 1 0 000-2zm0-6H3a1 1 0 000 2h18a1 1 0 000-2z"></path>
    </svg>
  );
};

UAlignLetterRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAlignLetterRight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAlignLetterRight;
