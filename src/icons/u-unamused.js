import React from 'react';
import PropTypes from 'prop-types';

const UUnamused = props => {
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
      <path d="M14.66 13.56l-4.19 1.5A1 1 0 0010.8 17c.116 0 .231-.02.34-.06l4.2-1.5a.999.999 0 10-.68-1.88zm-4-3a1 1 0 000-1.41 3.08 3.08 0 00-4.24 0 1 1 0 101.41 1.41 1.001 1.001 0 011.42 0 1 1 0 001.41 0zm7-1.41a3.08 3.08 0 00-4.24 0 1 1 0 001.41 1.41 1.002 1.002 0 011.42 0 1 1 0 001.41 0 1.001 1.001 0 00-.04-1.43l.04.02zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16.001A8 8 0 0112 20z"></path>
    </svg>
  );
};

UUnamused.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UUnamused.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UUnamused;
