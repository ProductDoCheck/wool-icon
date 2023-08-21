import React from 'react';
import PropTypes from 'prop-types';

const FiMoreVertical = props => {
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
      <path d="M12 20a1 1 0 100-2 1 1 0 000 2z"></path>
      <path d="M12 13a1 1 0 100-2 1 1 0 000 2z"></path>
      <path d="M12 6a1 1 0 100-2 1 1 0 000 2z"></path>
    </svg>
  );
};

FiMoreVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiMoreVertical.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiMoreVertical;
