import React from 'react';
import PropTypes from 'prop-types';

const FiColumns = props => {
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
      <path d="M12 3v18m0-18h7a2 2 0 012 2v14a2 2 0 01-2 2h-7V3zm0 0H5a2 2 0 00-2 2v14a2 2 0 002 2h7V3z"></path>
    </svg>
  );
};

FiColumns.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiColumns.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiColumns;
