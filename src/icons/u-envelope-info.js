import React from 'react';
import PropTypes from 'prop-types';

const UEnvelopeInfo = props => {
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
      <path d="M21 13.5a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V8.91l5.88 5.88a3 3 0 004.24 0l3.59-3.58a1.004 1.004 0 10-1.42-1.42l-3.58 3.59a.999.999 0 01-1.42 0L5.41 7.5H17a1 1 0 100-2H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1zm0-9a1.05 1.05 0 00.71-.29l.12-.16a.56.56 0 00.09-.17.64.64 0 00.08-.18 1.362 1.362 0 000-.2 1.05 1.05 0 00-.29-.71 1 1 0 00-1.639.325 1 1 0 00.219 1.095c.192.183.445.286.71.29zm0 1a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z"></path>
    </svg>
  );
};

UEnvelopeInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UEnvelopeInfo.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UEnvelopeInfo;
