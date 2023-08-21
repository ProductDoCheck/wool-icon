import React from 'react';
import PropTypes from 'prop-types';

const UReceiptAlt = props => {
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
      <path d="M10 8h6a1 1 0 100-2h-6a1 1 0 000 2zm-2 4h8a1 1 0 000-2H8a1 1 0 000 2zm0 4h8a1 1 0 000-2H8a1 1 0 000 2zM20 2H4a1 1 0 00-1 1v18a1 1 0 001.6.8l2.07-1.55 2.06 1.55a1 1 0 001.2 0L12 20.25l2.07 1.55a1 1 0 001.2 0l2.06-1.55 2.07 1.55a1 1 0 001.45-.277A1 1 0 0021 21V3a1 1 0 00-1-1zm-1 17l-1.07-.8a1 1 0 00-1.2 0l-2.06 1.55-2.07-1.55a1 1 0 00-1.2 0l-2.07 1.55-2.06-1.55a1 1 0 00-1.2 0L5 19V4h14v15z"></path>
    </svg>
  );
};

UReceiptAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UReceiptAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UReceiptAlt;
