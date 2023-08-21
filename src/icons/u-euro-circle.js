import React from 'react';
import PropTypes from 'prop-types';

const UEuroCircle = props => {
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
      <path d="M12 1a11 11 0 100 22 11 11 0 000-22zm0 20a9 9 0 110-18 9 9 0 010 18zm.59-13.33a3.34 3.34 0 012.62 1.38 1 1 0 001.659-.105 1 1 0 00-.079-1.115 5.32 5.32 0 00-4.2-2.16A5.57 5.57 0 007.46 9.5H6a1 1 0 000 2h1v1H6a1 1 0 000 2h1.46a5.57 5.57 0 005.13 3.83 5.32 5.32 0 004.2-2.16A1 1 0 1015.21 15a3.34 3.34 0 01-2.62 1.38 3.42 3.42 0 01-2.92-1.88H12a1 1 0 000-2H9.05A4.233 4.233 0 019 12c.007-.168.023-.335.05-.5H12a1 1 0 000-2H9.67a3.42 3.42 0 012.92-1.83z"></path>
    </svg>
  );
};

UEuroCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEuroCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEuroCircle;
