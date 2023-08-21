import React from 'react';
import PropTypes from 'prop-types';

const UCube = props => {
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
      <path d="M20.47 7.37v-.08l-.06-.15a.712.712 0 00-.07-.09.93.93 0 00-.09-.12l-.09-.07-.16-.08-7.5-4.63a1 1 0 00-1.06 0L4 6.78l-.09.08-.09.07a.94.94 0 00-.09.12.71.71 0 00-.07.09l-.06.15v.08a1.15 1.15 0 000 .26v8.74a1 1 0 00.47.85l7.5 4.63a.466.466 0 00.15.06h.08a.86.86 0 00.52 0h.08a.465.465 0 00.15-.06L20 17.22a1 1 0 00.47-.85V7.63c.01-.086.01-.174 0-.26zM11 19.21l-5.5-3.4V9.43l5.5 3.39v6.39zm1-8.12L6.4 7.63 12 4.18l5.6 3.45-5.6 3.46zm6.5 4.72l-5.5 3.4v-6.39l5.5-3.39v6.38z"></path>
    </svg>
  );
};

UCube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCube.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCube;
