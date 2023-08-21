import React from 'react';
import PropTypes from 'prop-types';

const UMinusCircle = props => {
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
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20zm4-9H8a1 1 0 000 2h8a1 1 0 000-2z"></path>
    </svg>
  );
};

UMinusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMinusCircle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMinusCircle;
