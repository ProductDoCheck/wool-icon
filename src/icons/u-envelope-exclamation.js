import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeExclamation = props => {
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
      <path d="M21 13.5a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V8.91l5.88 5.88a3 3 0 004.24 0l3.59-3.58a1.004 1.004 0 10-1.42-1.42l-3.58 3.59a1.002 1.002 0 01-1.42 0L5.41 7.5H17a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm0-11a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm-.2 7a.64.64 0 00-.18.06.76.76 0 00-.18.09l-.15.12a1.05 1.05 0 00-.29.71 1.23 1.23 0 000 .19c.01.066.03.13.06.19a.762.762 0 00.09.18c.037.052.077.103.12.15a1.002 1.002 0 001.42 0l.12-.15a.762.762 0 00.09-.18c.03-.06.05-.124.06-.19a1.23 1.23 0 000-.19 1 1 0 00-1.2-1l.04.02z"></path>
    </svg>
  );
};

UEnvelopeExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeExclamation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeExclamation;
