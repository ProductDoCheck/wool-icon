import React from 'react';
import PropTypes from 'prop-types';

const UForwadedCall = props => {
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
      <path d="M14.94 6.56h3.58l-.79.8a1 1 0 000 1.41 1 1 0 001.41 0l2.5-2.5a1 1 0 000-1.41l-2.5-2.5a1 1 0 00-1.41 1.41l.79.79h-3.58a1 1 0 100 2zm4.5 6.44c-.22 0-.45-.07-.67-.12a9.439 9.439 0 01-1.31-.39 2 2 0 00-2.48 1l-.22.45a12.18 12.18 0 01-2.66-2 12.178 12.178 0 01-2-2.66l.42-.28a2 2 0 001-2.48 10.32 10.32 0 01-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 00-3-2.49h-3a3 3 0 00-3 3.41 19 19 0 0016.52 16.46h.38a3 3 0 002.741-1.778 3 3 0 00.259-1.232v-3a3 3 0 00-2.47-2.9zm.5 6a1 1 0 01-.724.962 1.06 1.06 0 01-.436.038A17 17 0 014.07 5.22a1.09 1.09 0 01.25-.82 1 1 0 01.75-.34h3a1 1 0 011 .79c.04.273.09.543.15.81.115.527.27 1.045.46 1.55l-1.4.65a1 1 0 00-.49 1.33 14.49 14.49 0 007 7 1 1 0 00.76 0 .999.999 0 00.57-.52l.62-1.4a13.68 13.68 0 001.58.46c.267.06.537.11.81.15a1 1 0 01.79 1l.02 3.12z"></path>
    </svg>
  );
};

UForwadedCall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UForwadedCall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UForwadedCall;
