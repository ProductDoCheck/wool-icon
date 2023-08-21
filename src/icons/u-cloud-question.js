import React from 'react';
import PropTypes from 'prop-types';

const UCloudQuestion = props => {
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
      <path d="M18.42 8.22a7 7 0 00-13.36 1.89A4 4 0 006 18h2a1 1 0 100-2H6a2 2 0 110-4 1 1 0 001-1 5 5 0 019.73-1.61 1 1 0 00.78.67A3 3 0 0120 13a3 3 0 01-3 3 1 1 0 000 2 5 5 0 001.42-9.78zm-5.5 10.4a.561.561 0 00-.09-.17l-.12-.16a1.152 1.152 0 00-.33-.21 1 1 0 00-1.09.21l-.12.16a.561.561 0 00-.09.17.643.643 0 00-.06.18 1.517 1.517 0 000 .2 1.23 1.23 0 000 .19c.01.066.03.13.06.19.02.062.05.119.09.17l.12.16c.192.183.445.286.71.29a1 1 0 00.38-.08 1.15 1.15 0 00.33-.21l.12-.16a.559.559 0 00.09-.17c.03-.06.05-.124.06-.19.012-.063.018-.126.02-.19a1.483 1.483 0 000-.2.639.639 0 00-.08-.18zM12 11a3 3 0 00-2.6 1.5 1 1 0 001.126 1.465 1 1 0 00.604-.465A1 1 0 0112 13a1 1 0 010 2 1 1 0 000 2 3 3 0 000-6z"></path>
    </svg>
  );
};

UCloudQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudQuestion;
