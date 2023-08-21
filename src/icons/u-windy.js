import React from 'react';
import PropTypes from 'prop-types';

const UWindy = props => {
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
      <path d="M17 15a1.73 1.73 0 01-.86-.23 3.11 3.11 0 00-3.27 0 1.73 1.73 0 01-1.73 0 3.11 3.11 0 00-3.27 0A1.739 1.739 0 017 15a1 1 0 000 2 3.72 3.72 0 001.9-.52 1.13 1.13 0 011.2 0 3.75 3.75 0 003.8 0 1.13 1.13 0 011.2 0A3.72 3.72 0 0017 17a1 1 0 100-2zm0 4a1.73 1.73 0 01-.86-.23 3.11 3.11 0 00-3.27 0 1.73 1.73 0 01-1.73 0 3.11 3.11 0 00-3.27 0A1.739 1.739 0 017 19a1 1 0 000 2 3.72 3.72 0 001.9-.52 1.13 1.13 0 011.2 0 3.75 3.75 0 003.8 0 1.13 1.13 0 011.2 0A3.72 3.72 0 0017 21a1 1 0 100-2zm1.42-11.79a7 7 0 00-13.36 1.9A4 4 0 002 13a4 4 0 001.34 3 1 1 0 00.66.25 1 1 0 00.75-.35 1 1 0 00-.09-1.41A1.93 1.93 0 014 13a2 2 0 012-2 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.66A3 3 0 0120 12a2.93 2.93 0 01-.74 2 1 1 0 101.48 1.33A4.91 4.91 0 0022 12a5 5 0 00-3.58-4.79z"></path>
    </svg>
  );
};

UWindy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UWindy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UWindy;
