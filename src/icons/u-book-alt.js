import React from 'react';
import PropTypes from 'prop-types';

const UBookAlt = props => {
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
      <path d="M18 2H8a4 4 0 00-4 4v12a4 4 0 004 4h10a2 2 0 002-2V4a2 2 0 00-2-2zM6 6a2 2 0 012-2h10v10H8a3.91 3.91 0 00-2 .56V6zm2 14a2 2 0 110-4h10v4H8zm2-12h4a1 1 0 100-2h-4a1 1 0 000 2z"></path>
    </svg>
  );
};

UBookAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBookAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBookAlt;
