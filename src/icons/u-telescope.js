import React from 'react';
import PropTypes from 'prop-types';

const UTelescope = props => {
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
      <path d="M21.9 7.59l-1-3.87a3 3 0 00-3.71-2.12l-1.93.52a1 1 0 00-.71 1.23l.26 1L4.19 7.16a1 1 0 00-.71 1.22l.26 1-1 .26a1.008 1.008 0 10.25 2c.086.01.174.01.26 0l1-.27.26 1a1 1 0 00.46.6 1 1 0 00.5.14.752.752 0 00.26 0L9 12.08v.42c0 .444.103.882.3 1.28l-5 5a1 1 0 001.41 1.42l5-5 .28.11v6.19a1 1 0 002 0v-6.18c.1-.034.196-.074.29-.12l5 5a1 1 0 101.41-1.42l-5-5c.194-.4.3-.836.31-1.28v-2l1.35-.36.25 1a1 1 0 001 .74h.26l1.93-.52a3.001 3.001 0 002.11-3.77zM13 12.5a1 1 0 01-.28.69 1 1 0 01-.69.28 1 1 0 01-.7-.29 1 1 0 01-.29-.7v-1L13 11v1.5zm-6.81-1.74l-.52-1.93 9.66-2.59.26 1 .26 1-9.66 2.52zm13.68-1.9a1 1 0 01-.61.47l-1 .26-.78-2.9L17 4.76l-.26-1 1-.26a1 1 0 011.23.71l1 3.87a1 1 0 01-.1.78z"></path>
    </svg>
  );
};

UTelescope.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTelescope.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTelescope;
