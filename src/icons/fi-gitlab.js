import React from 'react';
import PropTypes from 'prop-types';

const FiGitlab = props => {
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
      <g clipPath="url(#clip0_19_27087)">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.43.43 0 015.4 2a.42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51a.43.43 0 01.69-.16.42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94v0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_27087">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FiGitlab.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FiGitlab.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FiGitlab;
