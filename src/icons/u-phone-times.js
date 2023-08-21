import React from 'react';
import PropTypes from 'prop-types';

const UPhoneTimes = props => {
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
      <path d="M19.85 5.56l1.79-1.79a1 1 0 10-1.41-1.41l-1.79 1.79-1.8-1.79a1 1 0 00-1.41 1.41L17 5.56l-1.79 1.8a1 1 0 000 1.41 1 1 0 001.41 0L18.44 7l1.79 1.79a1 1 0 001.41 0 1 1 0 000-1.41l-1.79-1.82zM19.44 13c-.22 0-.45-.07-.67-.12a9.443 9.443 0 01-1.31-.39 2 2 0 00-2.48 1l-.22.45a12.18 12.18 0 01-2.66-2 12.18 12.18 0 01-2-2.66l.42-.28a2 2 0 001-2.48 10.32 10.32 0 01-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 00-3-2.49h-3a3 3 0 00-3 3.41 19 19 0 0016.52 16.46h.38a3 3 0 002.741-1.778 3 3 0 00.259-1.232v-3a3 3 0 00-2.47-2.9zm.5 6a1 1 0 01-.724.962c-.14.043-.29.056-.436.038A17 17 0 014.07 5.22a1.09 1.09 0 01.25-.82 1 1 0 01.75-.34h3a1 1 0 011 .79c.04.273.09.543.15.81.116.527.27 1.045.46 1.55l-1.4.65a1 1 0 00-.49 1.33 14.49 14.49 0 007 7 1 1 0 00.76 0 1.002 1.002 0 00.57-.52l.62-1.4c.517.185 1.045.338 1.58.46.267.06.537.11.81.15a1 1 0 01.79 1l.02 3.12z"></path>
    </svg>
  );
};

UPhoneTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPhoneTimes.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPhoneTimes;
