import React from 'react';
import PropTypes from 'prop-types';

const UCloudShield = props => {
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
      <path d="M18.42 7.22A7 7 0 005.06 9.11a4 4 0 00-.38 7.66c.104.032.212.049.32.05a1.013 1.013 0 10.32-2A2 2 0 014 13a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67 3 3 0 011 5.53 1.004 1.004 0 001 1.74A5 5 0 0022 12a5 5 0 00-3.58-4.78zm-3.63 4.44a2.73 2.73 0 01-2.2-.47 1 1 0 00-1.18 0 2.72 2.72 0 01-2.2.47 1 1 0 00-1.21.97V16a4.63 4.63 0 001.84 3.7l1.57 1.15a1 1 0 001.18 0l1.57-1.16A4.6 4.6 0 0016 16v-3.37a1.002 1.002 0 00-.767-.965 1 1 0 00-.443-.005zM14 16a2.62 2.62 0 01-1 2l-1 .72-1-.72a2.62 2.62 0 01-1-2v-2.28a4.68 4.68 0 002-.55c.617.33 1.3.519 2 .55V16z"></path>
    </svg>
  );
};

UCloudShield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudShield.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudShield;
