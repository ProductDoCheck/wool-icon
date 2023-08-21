import React from 'react';
import PropTypes from 'prop-types';

const UCalling = props => {
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
      <path d="M20.47 9a1 1 0 100-2 1 1 0 000 2zm-3 0a1 1 0 100-2 1 1 0 000 2zm-3 0a1 1 0 100-2 1 1 0 000 2zm4.44 4c-.22 0-.45-.07-.67-.12a9.443 9.443 0 01-1.31-.39 2 2 0 00-2.48 1l-.22.45a12.483 12.483 0 01-2.67-2 12.833 12.833 0 01-2-2.66L10 9a2 2 0 001-2.48 10.337 10.337 0 01-.39-1.31c-.05-.23-.09-.45-.12-.68a3 3 0 00-3-2.49h-3a3 3 0 00-2.24 1 3 3 0 00-.73 2.39A19 19 0 0018 21.91c.13.01.26.01.39 0a3 3 0 003-3v-3A3 3 0 0018.91 13zm.49 6a.999.999 0 01-1.15 1 17.12 17.12 0 01-9.87-4.85 17.14 17.14 0 01-4.84-9.93 1 1 0 01.25-.82 1 1 0 01.74-.34h3a1 1 0 011 .79c.04.273.09.543.15.81.116.527.27 1.045.46 1.55l-1.4.65a1 1 0 00-.49 1.33 14.49 14.49 0 007 7 1 1 0 00.76 0 1 1 0 00.56-.52l.63-1.4c.517.185 1.045.338 1.58.46.26.06.54.11.81.15a1 1 0 01.78 1L19.4 19z"></path>
    </svg>
  );
};

UCalling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCalling.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCalling;
