import React from 'react';
import PropTypes from 'prop-types';

const UVerticalAlignBottom = props => {
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
      <path d="M21 20h-3V9a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H7a1 1 0 00-1 1v17H3a1 1 0 000 2h18a1 1 0 000-2zm-9 0H8V4h4v16zm4 0h-2V10h2v10z"></path>
    </svg>
  );
};

UVerticalAlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVerticalAlignBottom.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVerticalAlignBottom;
