import React from 'react';
import PropTypes from 'prop-types';

const UBus = props => {
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
      <path d="M8.5 17a1 1 0 001-1 1.36 1.36 0 000-.2.64.64 0 00-.06-.18.76.76 0 00-.09-.18l-.12-.15a1 1 0 00-.33-.21 1 1 0 00-.6-.08l-.18.06-.18.09a1.577 1.577 0 00-.15.12l-.12.15a.76.76 0 00-.09.18.64.64 0 00-.06.18 1.36 1.36 0 000 .2 1 1 0 001 1L8.5 17zm8 0a1 1 0 001-1 1.362 1.362 0 000-.2.64.64 0 00-.06-.18.762.762 0 00-.09-.18l-.12-.15a1.15 1.15 0 00-.33-.21 1 1 0 00-.76 0 1.15 1.15 0 00-.33.21l-.12.15a.762.762 0 00-.09.18.64.64 0 00-.06.18 1.362 1.362 0 000 .2 1 1 0 00.29.7 1 1 0 00.67.3zm-3-12h-2a1 1 0 100 2h2a1 1 0 100-2zm5-3h-12a3 3 0 00-3 3v12a3 3 0 002 2.82V21a1 1 0 102 0v-1h10v1a1 1 0 002 0v-1.18a3 3 0 002-2.82V5a3 3 0 00-3-3zm1 15a1 1 0 01-1 1h-12a1 1 0 01-1-1v-3h14v3zm0-5h-14V5a1 1 0 011-1h12a1 1 0 011 1v7z"></path>
    </svg>
  );
};

UBus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBus;
