import React from 'react';
import PropTypes from 'prop-types';

const UDna = props => {
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
      <path d="M9.2 13.73a1 1 0 00-1.41-.05A11.18 11.18 0 004 22a1 1 0 102 0 9.15 9.15 0 013.15-6.86 1 1 0 00.05-1.41zm10.17 4.64a10.86 10.86 0 00-1.6-3A14.31 14.31 0 0014.06 12C16.3 10.57 20 7.4 20 2a1 1 0 00-2 0c0 5.4-4.59 8.17-6 8.89A13.421 13.421 0 019.31 9H12a1 1 0 100-2H7.55a9.39 9.39 0 01-1-2H15a1 1 0 100-2H6.06A8.14 8.14 0 016 2a1 1 0 00-2 0c0 7.57 7.3 10.79 7.61 10.92A12.932 12.932 0 0114.7 15H12a1 1 0 000 2h4.43a9.07 9.07 0 011 2H9a1 1 0 000 2h8.94c.04.332.06.666.06 1a1 1 0 002 0c.004-.736-.07-1.47-.22-2.19a9.23 9.23 0 00-.41-1.44z"></path>
    </svg>
  );
};

UDna.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDna.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDna;
