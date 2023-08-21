import React from 'react';
import PropTypes from 'prop-types';

const UImageShield = props => {
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
      <path d="M22.13 2.36a1 1 0 00-.84-.2 2.7 2.7 0 01-2.2-.47 1 1 0 00-1.18 0 2.7 2.7 0 01-2.2.47 1 1 0 00-1.21.98v3.31a4.63 4.63 0 001.84 3.7l1.57 1.16a1 1 0 001.18 0l1.57-1.16a4.63 4.63 0 001.84-3.7V3.14a1 1 0 00-.37-.78zM20.5 6.45a2.62 2.62 0 01-1 2.09l-1 .72-1-.72a2.62 2.62 0 01-1-2.09V4.22a4.81 4.81 0 002-.54 4.81 4.81 0 002 .54v2.23zm-2 7.05a1 1 0 00-1 1v.39L16 13.41a2.77 2.77 0 00-3.93 0l-.7.7-2.46-2.49a2.85 2.85 0 00-3.93 0L3.5 13.1V7.5a1 1 0 011-1h7a1 1 0 100-2h-7a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zm-14 7a1 1 0 01-1-1v-3.57L6.4 13a.79.79 0 011.09 0l3.17 3.17L15 20.5H4.5zm13-1a1 1 0 01-.18.53l-4.51-4.51.7-.7a.78.78 0 011.1 0l2.89 2.9v1.78z"></path>
    </svg>
  );
};

UImageShield.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageShield.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageShield;