import React from 'react';
import PropTypes from 'prop-types';

const UHistoryAlt = props => {
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
      <path d="M11.44 2a10 10 0 00-6.88 2.77V3a1 1 0 00-2 0v4.5a1 1 0 001 1h4.5a1 1 0 000-2h-2.4A8 8 0 1111.44 20a1 1 0 000 2 10 10 0 000-20zm0 6a1 1 0 00-1 1v3a1 1 0 001 1h2a1 1 0 000-2h-1V9a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UHistoryAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHistoryAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHistoryAlt;