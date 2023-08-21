import React from 'react';
import PropTypes from 'prop-types';

const UAt = props => {
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
      <path d="M12 2a10 10 0 105 18.66 1 1 0 10-1-1.73A8 8 0 1120 12v.75a1.75 1.75 0 01-3.5 0V8.5a1 1 0 00-1-1 1 1 0 00-1 .79A4.45 4.45 0 0012 7.5a4.5 4.5 0 103.3 7.5 3.74 3.74 0 006.7-2.25V12A9.999 9.999 0 0012 2zm0 12.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"></path>
    </svg>
  );
};

UAt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAt;
