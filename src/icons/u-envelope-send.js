import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeSend = props => {
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
      <path d="M16 10.5H8a3 3 0 00-3 3v5a3 3 0 003 3h8a3 3 0 003-3v-5a3 3 0 00-3-3zm-.42 2l-2.88 2.88a1 1 0 01-1.4 0L8.42 12.5h7.16zm1.42 6a1 1 0 01-1 1H8a1 1 0 01-1-1v-4.59l2.88 2.87a2.94 2.94 0 002.12.89 3 3 0 002.12-.88L17 13.91v4.59zm-8-12h3.59l-.3.29a1.001 1.001 0 00.325 1.639 1 1 0 001.095-.22l2-2a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-2-2a1.004 1.004 0 00-1.42 1.42l.3.29H9a1 1 0 000 2z"></path>
    </svg>
  );
};

UEnvelopeSend.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeSend.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeSend;
