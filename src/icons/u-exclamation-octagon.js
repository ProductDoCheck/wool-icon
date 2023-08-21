import React from 'react';
import PropTypes from 'prop-types';

const UExclamationOctagon = props => {
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
      <path d="M12 7a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1zm0 8a1 1 0 100 2 1 1 0 000-2zm9.71-7.44l-5.27-5.27a1.05 1.05 0 00-.71-.29H8.27a1.05 1.05 0 00-.71.29L2.29 7.56a1.05 1.05 0 00-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 00.71-.29l5.27-5.27a1.05 1.05 0 00.29-.71V8.27a1.05 1.05 0 00-.29-.71zM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69v6.62z"></path>
    </svg>
  );
};

UExclamationOctagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UExclamationOctagon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UExclamationOctagon;
