import React from 'react';
import PropTypes from 'prop-types';

const URuler = props => {
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
      <path d="M22.61 7.05L17 1.39a1.001 1.001 0 00-1.41 0L1.39 15.54a1 1 0 000 1.41l5.66 5.66a1 1 0 001.41 0l2.83-2.83 8.49-8.49 2.83-2.83a1 1 0 000-1.41zm-3.54 2.12l-.71-.71a1 1 0 10-1.41 1.42l.71.71L16.24 12l-2.12-2.12a1 1 0 00-1.41 1.41l2.12 2.12-1.42 1.42-.7-.71a1.004 1.004 0 10-1.42 1.42l.71.7-1.41 1.42-2.13-2.12a1 1 0 00-1.41 0 1 1 0 000 1.41l2.12 2.12-1.41 1.42-4.25-4.25L16.24 3.51l4.25 4.25-1.42 1.41z"></path>
    </svg>
  );
};

URuler.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URuler.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URuler;
