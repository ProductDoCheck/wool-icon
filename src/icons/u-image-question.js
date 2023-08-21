import React from 'react';
import PropTypes from 'prop-types';

const UImageQuestion = props => {
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
      <path d="M19 13a1 1 0 00-1 1v.39l-1.48-1.48a2.77 2.77 0 00-3.93 0l-.7.7-2.48-2.49a2.86 2.86 0 00-3.93 0L4 12.6V7a1 1 0 011-1h8a1 1 0 100-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.9a.79.79 0 011.09 0l3.17 3.17 4.29 4.3H5zm13-1a1 1 0 01-.18.53L13.31 15l.7-.7a.78.78 0 011.1 0L18 17.22V19zm1-17a3 3 0 00-2.6 1.5 1 1 0 001.126 1.465 1 1 0 00.604-.465A1 1 0 0120 5a1 1 0 01-1 1 1 1 0 100 2 3 3 0 000-6zm.38 7.08A1 1 0 0018.8 9l-.18.06-.18.09-.15.13A1 1 0 0018 10a1 1 0 101.38-.92z"></path>
    </svg>
  );
};

UImageQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UImageQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UImageQuestion;
