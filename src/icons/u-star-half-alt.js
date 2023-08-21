import React from 'react';
import PropTypes from 'prop-types';

const UStarHalfAlt = props => {
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
      <path d="M22 9.67a1 1 0 00-.86-.67l-5.69-.83L12.9 3a1 1 0 00-1.8 0L8.55 8.16 2.86 9a1 1 0 00-.81.68 1 1 0 00.25 1l4.13 4-1 5.68a1 1 0 001.47 1.08l5.1-2.67 5.1 2.67c.14.08.299.12.46.12a1 1 0 00.59-.19.999.999 0 00.4-1l-1-5.68 4.13-4A1 1 0 0022 9.67zM11 17l-3.23 1.7.72-4.2a1 1 0 00-.29-.88l-3-3 4.21-.61a1 1 0 00.76-.55L11 7.73V17zm4.8-3.38a1 1 0 00-.29.88l.72 4.2L13 17V7.73l.88 1.79a1 1 0 00.76.55l4.21.61-3.05 2.94z"></path>
    </svg>
  );
};

UStarHalfAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UStarHalfAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UStarHalfAlt;
