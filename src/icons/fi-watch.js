import React from 'react';
import PropTypes from 'prop-types';

const FiWatch = props => {
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
      <path d="M12 19a7 7 0 100-14 7 7 0 000 14z"></path>
      <path d="M12 9v3l1.5 1.5"></path>
      <path d="M16.51 17.35l-.35 3.83a2 2 0 01-2 1.82H9.83a2 2 0 01-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 019.83 1h4.35a2 2 0 012 1.82l.35 3.83"></path>
    </svg>
  );
};

FiWatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiWatch.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiWatch;
