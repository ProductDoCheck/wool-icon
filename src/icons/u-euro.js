import React from 'react';
import PropTypes from 'prop-types';

const UEuro = props => {
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
      <path d="M19.2 17.41A6 6 0 0114.46 20c-2.68 0-5-2-6-5H14a1 1 0 000-2H8.05c0-.33-.05-.67-.05-1 0-.33 0-.67.05-1H14a1 1 0 000-2H8.47c1-3 3.31-5 6-5a6 6 0 014.73 2.59 1 1 0 101.6-1.18A7.92 7.92 0 0014.46 2c-3.76 0-7 2.84-8.07 7H4a1 1 0 000 2h2.05v2H4a1 1 0 000 2h2.39c1.09 4.16 4.31 7 8.07 7a7.92 7.92 0 006.34-3.41 1 1 0 00-1.6-1.18z"></path>
    </svg>
  );
};

UEuro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEuro.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEuro;
