import React from 'react';
import PropTypes from 'prop-types';

const FiCodepen = props => {
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
      <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path>
      <path d="M12 22v-6.5"></path>
      <path d="M22 8.5l-10 7-10-7"></path>
      <path d="M2 15.5l10-7 10 7"></path>
      <path d="M12 2v6.5"></path>
    </svg>
  );
};

FiCodepen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiCodepen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiCodepen;
