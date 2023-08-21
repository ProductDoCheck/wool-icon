import React from 'react';
import PropTypes from 'prop-types';

const UHdd = props => {
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
      <path d="M22 14.86v-.05a2.608 2.608 0 00-.1-.57l-1.64-9.73a3 3 0 00-3-2.51H6.69a3 3 0 00-2.95 2.51l-1.62 9.71a2.61 2.61 0 00-.1.57v.05C2 14.91 2 15 2 15v4a3 3 0 003 3h14a3 3 0 003-3v-4-.14zM5.71 4.83a1 1 0 011-.83h10.6a1 1 0 011 .83l1.2 7.22A2.638 2.638 0 0019 12H5a2.635 2.635 0 00-.49.05l1.2-7.22zM20 19a1 1 0 01-1 1H5a1 1 0 01-1-1v-3.92l.08-.46A1 1 0 015 14h14a1 1 0 01.92.62l.08.46V19zm-3-3a1 1 0 100 2 1 1 0 000-2z"></path>
    </svg>
  );
};

UHdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UHdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UHdd;
