import React from 'react';
import PropTypes from 'prop-types';

const FiFileMinus = props => {
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
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"></path>
      <path d="M14 2v6h6"></path>
      <path d="M9 15h6"></path>
    </svg>
  );
};

FiFileMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiFileMinus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiFileMinus;
