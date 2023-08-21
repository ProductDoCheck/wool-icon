import React from 'react';
import PropTypes from 'prop-types';

const UFileShareAlt = props => {
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
      <path d="M13.5 12.5a1 1 0 00-1-1h-5a1 1 0 000 2h5a1 1 0 001-1zm5 5a2 2 0 00-1.18.39l-1.75-.8 1.91-.88c.302.183.647.283 1 .29a2 2 0 10-2-2l-1.89.87A2 2 0 1013.5 19c.322 0 .639-.082.92-.24l2.1 1a2 2 0 102-2.23l-.02-.03zm-8 2h-5a1 1 0 01-1-1v-14a1 1 0 011-1h5v3a3 3 0 003 3h3a1 1 0 002 0v-1-.06a1.307 1.307 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.071 1.071 0 00-.28-.19.29.29 0 00-.1 0 1.1 1.1 0 00-.26-.06H5.5a3 3 0 00-3 3v14a3 3 0 003 3h5a1 1 0 100-2v-.05zm2-14.59l2.59 2.59H13.5a1 1 0 01-1-1V4.91zm-5 10.59a1 1 0 000 2h1a1 1 0 100-2h-1zm0-6h1a1 1 0 000-2h-1a1 1 0 000 2z"></path>
    </svg>
  );
};

UFileShareAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFileShareAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFileShareAlt;
