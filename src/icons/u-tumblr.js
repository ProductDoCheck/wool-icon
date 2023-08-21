import React from 'react';
import PropTypes from 'prop-types';

const UTumblr = props => {
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
      <path d="M16.79 18a4.65 4.65 0 01-1.62.35 1.75 1.75 0 01-1.92-2v-6.23h4v-3h-4V2h-2.92a.15.15 0 00-.14.15 6.11 6.11 0 01-3.94 5.39v2.58h2v6.54c0 2.23 1.65 5.41 6 5.34 1.47 0 3.11-.64 3.47-1.17L16.79 18z"></path>
    </svg>
  );
};

UTumblr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTumblr.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTumblr;
