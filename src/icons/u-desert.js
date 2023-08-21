import React from 'react';
import PropTypes from 'prop-types';

const UDesert = props => {
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
      <path d="M18 2a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm-3 12h-2v-2a1 1 0 00-2 0v2H9v-3.38l3.45-1.73A1 1 0 0013 14v-4a1 1 0 00-2 0v3.38l-2 1V8a1 1 0 00-2 0v8.38l-2-1V13a1 1 0 10-2 0v3a1 1 0 00.55.89L7 18.62V20H3a1 1 0 000 2h12a1 1 0 000-2z"></path>
    </svg>
  );
};

UDesert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UDesert.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UDesert;
