import React from 'react';
import PropTypes from 'prop-types';

const UOctagon = props => {
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
      <path d="M21.71 7.57l-5.27-5.28a1.05 1.05 0 00-.71-.29H8.27a1.05 1.05 0 00-.71.29L2.29 7.57a1 1 0 00-.29.7v7.46a1 1 0 00.29.7l5.27 5.28c.192.183.445.286.71.29h7.46a1.05 1.05 0 00.71-.29l5.27-5.28a1 1 0 00.29-.7V8.27a1 1 0 00-.29-.7zM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62z"></path>
    </svg>
  );
};

UOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UOctagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UOctagon;
