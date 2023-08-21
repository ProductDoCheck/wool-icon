import React from 'react';
import PropTypes from 'prop-types';

const UBan = props => {
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
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 01-8-8 7.92 7.92 0 011.69-4.9L16.9 18.31A7.92 7.92 0 0112 20zm6.31-3.1L7.1 5.69A7.92 7.92 0 0112 4a8 8 0 018 8 7.92 7.92 0 01-1.69 4.9z"></path>
    </svg>
  );
};

UBan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBan.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBan;
