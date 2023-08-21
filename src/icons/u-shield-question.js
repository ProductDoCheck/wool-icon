import React from 'react';
import PropTypes from 'prop-types';

const UShieldQuestion = props => {
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
      <path d="M11.29 14.66a1 1 0 00-.21 1.09 1 1 0 001.92-.39 1 1 0 00-1.71-.7zm8.34-11a1 1 0 00-.84-.2 8 8 0 01-6.22-1.27 1 1 0 00-1.14 0 8 8 0 01-6.22 1.26A1 1 0 004 4.43v7.45a9 9 0 003.77 7.33l3.65 2.6a1 1 0 001.16 0l3.65-2.6A9.001 9.001 0 0020 11.88V4.43a1 1 0 00-.37-.78v.01zM18 11.88a7 7 0 01-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 016 11.88v-6.3a10 10 0 006-1.39 10 10 0 006 1.39v6.3zm-6-4.52a3 3 0 00-2.6 1.5 1 1 0 001.73 1 1 1 0 11.87 1.5 1 1 0 100 2 3 3 0 000-6z"></path>
    </svg>
  );
};

UShieldQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShieldQuestion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShieldQuestion;
