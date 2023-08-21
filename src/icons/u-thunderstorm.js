import React from 'react';
import PropTypes from 'prop-types';

const UThunderstorm = props => {
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
      <path d="M13.5 15h-2.27l1.45-2.5a1.002 1.002 0 00-.741-1.495 1.003 1.003 0 00-.999.495l-2.31 4A1 1 0 009.5 17h2.27l-1.45 2.5a1.004 1.004 0 001.74 1l2.31-4a1 1 0 00-.87-1.5zm4.92-7.79a7 7 0 00-13.36 1.9A4 4 0 006 17a1 1 0 100-2 2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66A3 3 0 0117 15a1 1 0 000 2 5 5 0 001.42-9.79z"></path>
    </svg>
  );
};

UThunderstorm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UThunderstorm.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UThunderstorm;
