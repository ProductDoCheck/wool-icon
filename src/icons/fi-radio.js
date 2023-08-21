import React from 'react';
import PropTypes from 'prop-types';

const FiRadio = props => {
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
      <path d="M12 14a2 2 0 100-4 2 2 0 000 4z"></path>
      <path d="M16.24 7.76a5.999 5.999 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"></path>
    </svg>
  );
};

FiRadio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiRadio.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiRadio;
