import React from 'react';
import PropTypes from 'prop-types';

const UFeedback = props => {
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
      <path d="M22 1h-7a2.44 2.44 0 00-2.41 2l-.92 5.05a2.44 2.44 0 001.373 2.647 2.47 2.47 0 001.037.233H17l-.25.66a3.26 3.26 0 003 4.41.999.999 0 00.92-.59l2.24-5.06A1 1 0 0023 10V2a1 1 0 00-1-1zm-1 8.73l-1.83 4.13a1.33 1.33 0 01-.45-.4 1.23 1.23 0 01-.14-1.16l.38-1a1.68 1.68 0 00-.2-1.58A1.7 1.7 0 0017.35 9h-3.29a.46.46 0 01-.35-.16.5.5 0 01-.09-.37l.92-5A.441.441 0 0115 3h6v6.73zM9.94 13.05H7.05l.25-.66A3.26 3.26 0 004.25 8a1 1 0 00-.92.59l-2.24 5.06a1 1 0 00-.09.4v8a1 1 0 001 1h7a2.44 2.44 0 002.41-2l.92-5a2.44 2.44 0 00-.53-2 2.47 2.47 0 00-1.86-1zm-.48 7.58A.44.44 0 019 21H3v-6.73l1.83-4.13c.179.097.333.234.45.4a1.23 1.23 0 01.14 1.16l-.38 1a1.68 1.68 0 00.2 1.58 1.7 1.7 0 001.41.74h3.29a.458.458 0 01.35.16.5.5 0 01.09.37l-.92 5.08z"></path>
    </svg>
  );
};

UFeedback.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFeedback.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFeedback;
