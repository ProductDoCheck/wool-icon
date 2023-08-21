import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeHeart = props => {
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
      <path d="M20.5 13a1 1 0 00-1 1v4a1 1 0 01-1 1h-14a1 1 0 01-1-1V8.41l5.88 5.89a3 3 0 003.276.637c.37-.154.704-.381.984-.667l.89-.88a1 1 0 00-1.4-1.39l-.93.91a1 1 0 01-1.4 0L4.91 7H9.5a1 1 0 100-2h-5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm1.05-9a3.33 3.33 0 00-3.88-.54 3.25 3.25 0 00-3.88 5.13L17 11.71c.192.183.445.286.71.29a.998.998 0 00.71-.29l3.17-3.17A3.26 3.26 0 0021.55 4zm-1.41 3.12l-2.47 2.47-2.46-2.47A1.255 1.255 0 1117 5.36a1 1 0 001.42 0 1.28 1.28 0 011.76 0 1.26 1.26 0 01-.04 1.76z"></path>
    </svg>
  );
};

UEnvelopeHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeHeart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeHeart;
