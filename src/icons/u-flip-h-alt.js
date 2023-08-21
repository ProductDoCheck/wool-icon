import React from 'react';
import PropTypes from 'prop-types';

const UFlipHAlt = props => {
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
      <path d="M13.21 5.7a1 1 0 00.24 0l1.94-.49a1 1 0 00-.48-1.94L13 3.73a1.007 1.007 0 00.24 2l-.03-.03zM9.51 9h-2a1 1 0 100 2h2a1 1 0 000-2zm4 0a1 1 0 100 2h2a1 1 0 000-2h-2zM7.39 7.15h.24l1.94-.48a1.014 1.014 0 00-.48-1.97l-1.94.48a1.007 1.007 0 10.24 2v-.03zM4 10.51a1 1 0 001-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zm16.62-8.3a1 1 0 00-.86-.21l-1 .24a1 1 0 00.27 1.97A1 1 0 0021 4V3a1 1 0 00-.38-.79zM20 7a1 1 0 00-1 1v1.14a1 1 0 00.51 1.86H20a1 1 0 001-1V8a1 1 0 00-1-1zm0 6H4a1 1 0 00-1 1v3a1 1 0 00.76 1l16 4c.08.01.16.01.24 0a1 1 0 001-1v-7a1 1 0 00-1-1zm-1 6.72l-14-3.5V15h14v4.72z"></path>
    </svg>
  );
};

UFlipHAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFlipHAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFlipHAlt;
