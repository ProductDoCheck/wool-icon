import React from 'react';
import PropTypes from 'prop-types';

const UCloudSunMeatball = props => {
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
      <path d="M12.5 16.92h-.77l.39-.67a1.003 1.003 0 00-1.74-1l-.38.67-.38-.67a1.003 1.003 0 10-1.74 1l.39.67H7.5a1 1 0 100 2h.77l-.39.66a1.003 1.003 0 101.74 1l.38-.66.38.66a1.005 1.005 0 001.665.112 1.002 1.002 0 00.075-1.112l-.39-.66h.77a1 1 0 000-2zm8.5-9h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 4.72v-.8a1 1 0 00-2 0v.8a4.1 4.1 0 00-1.26.52l-.57-.56a1 1 0 00-1.41 1.41l.56.56c-.09.16-.16.33-.24.49a5.85 5.85 0 00-1.58-.22A6 6 0 004.56 12 3.52 3.52 0 002 15.42a3.47 3.47 0 001.41 2.79 1 1 0 101.18-1.61A1.46 1.46 0 014 15.42a1.5 1.5 0 011.5-1.5 1 1 0 001-1 4 4 0 017.78-1.29.999.999 0 00.78.66 2.33 2.33 0 01.54 4.44 1 1 0 00-.15 1.758 1 1 0 00.55.162.93.93 0 00.4-.09A4.33 4.33 0 0018.7 13l.13.13a1 1 0 001.41-1.42l-.56-.56a4.2 4.2 0 00.52-1.26h.8a1 1 0 000-2v.03zm-3.34 2.64a1.89 1.89 0 01-.6.41 4.15 4.15 0 00-1.06-.51A6 6 0 0013.88 8c.107-.26.263-.499.46-.7a2.42 2.42 0 013.3 0 2.34 2.34 0 010 3.29l.02-.03z"></path>
    </svg>
  );
};

UCloudSunMeatball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudSunMeatball.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudSunMeatball;
