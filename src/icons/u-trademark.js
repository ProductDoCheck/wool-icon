import React from 'react';
import PropTypes from 'prop-types';

const UTrademark = props => {
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
      <path d="M9.5 7h-6a1 1 0 000 2h2v7a1 1 0 102 0V9h2a1 1 0 100-2zm11.92.62a1 1 0 00-.54-.54 1 1 0 00-.76 0 1 1 0 00-.33.21L17 10.09l-2.79-2.8a1 1 0 00-.33-.21 1 1 0 00-.76 0 1 1 0 00-.54.54c-.051.12-.078.25-.08.38v8a1 1 0 002 0v-5.59l1.79 1.8a1.002 1.002 0 001.42 0l1.79-1.8V16a1 1 0 002 0V8a1.001 1.001 0 00-.08-.38z"></path>
    </svg>
  );
};

UTrademark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTrademark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTrademark;
