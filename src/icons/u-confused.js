import React from 'react';
import PropTypes from 'prop-types';

const UConfused = props => {
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
      <path d="M9 9a1 1 0 100 2 1 1 0 000-2zm5.66 4.56l-4.19 1.5A1 1 0 0010.8 17c.116 0 .231-.02.34-.06l4.2-1.5a.999.999 0 10-.68-1.88zM15 9a1 1 0 100 2 1 1 0 000-2zm-3-7a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UConfused.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UConfused.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UConfused;
