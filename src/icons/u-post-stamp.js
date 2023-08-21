import React from 'react';
import PropTypes from 'prop-types';

const UPostStamp = props => {
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
      <g clipPath="url(#clip0_19_21678)">
        <path d="M22.5 5.5a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1 .5.5 0 01-1 0 1 1 0 00-1-1h-3a1 1 0 00-1 1 .5.5 0 01-1 0 1 1 0 00-1-1h-3a1 1 0 00-1 1 .5.5 0 11-1 0 1 1 0 00-1-1h-3a1 1 0 00-1 1v3a1 1 0 001 1 .5.5 0 110 1 1 1 0 00-1 1v3a1 1 0 001 1 .5.5 0 010 1 1 1 0 00-1 1v3a1 1 0 001 1 .5.5 0 010 1 1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1 .5.5 0 011 0 1 1 0 001 1h3a1 1 0 001-1 .5.5 0 011 0 1 1 0 001 1h3a1 1 0 001-1 .5.5 0 011 0 1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1 .5.5 0 010-1 1 1 0 001-1v-3a1 1 0 00-1-1 .5.5 0 010-1 1 1 0 001-1v-3a1 1 0 00-1-1 .5.5 0 010-1zm-1-1.79a2.5 2.5 0 000 4.58v1.42a2.5 2.5 0 000 4.58v1.42a2.5 2.5 0 000 4.58v1.21h-1.21a2.5 2.5 0 00-4.58 0h-1.42a2.5 2.5 0 00-4.58 0H8.29a2.5 2.5 0 00-4.58 0H2.5v-1.21a2.5 2.5 0 000-4.58v-1.42a2.5 2.5 0 000-4.58V8.29a2.5 2.5 0 000-4.58V2.5h1.21a2.5 2.5 0 004.58 0h1.42a2.5 2.5 0 004.58 0h1.42a2.5 2.5 0 004.58 0h1.21v1.21zM12 5a7 7 0 103.5 13.06 1 1 0 10-1-1.73A5 5 0 1117 12v.5a.83.83 0 01-.83.83.84.84 0 01-.84-.83V9.67a1 1 0 00-1.78-.6 3.25 3.25 0 00-1.55-.4 3.33 3.33 0 100 6.66c.8 0 1.57-.291 2.17-.82a2.84 2.84 0 004.83-2V12a7 7 0 00-7-7zm0 8.33A1.33 1.33 0 1113.33 12 1.321 1.321 0 0112 13.33z"></path>
      </g>
      <defs>
        <clipPath id="clip0_19_21678">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UPostStamp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPostStamp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPostStamp;
