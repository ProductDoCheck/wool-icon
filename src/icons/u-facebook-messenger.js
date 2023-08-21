import React from 'react';
import PropTypes from 'prop-types';

const UFacebookMessenger = props => {
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
      <path d="M12 2a9.65 9.65 0 00-10 9.7 9.51 9.51 0 003.14 7.18.81.81 0 01.27.56v1.78a.81.81 0 001.13.71l2-.87a.75.75 0 01.53 0c.945.255 1.92.383 2.9.38A9.72 9.72 0 0012 2zm6 7.46l-2.93 4.66a1.5 1.5 0 01-2.17.4l-2.34-1.75a.6.6 0 00-.72 0l-3.16 2.4a.47.47 0 01-.68-.63l2.93-4.66a1.5 1.5 0 012.17-.4l2.34 1.75a.6.6 0 00.72 0l3.16-2.4a.47.47 0 01.68.63z"></path>
    </svg>
  );
};

UFacebookMessenger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFacebookMessenger.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFacebookMessenger;
