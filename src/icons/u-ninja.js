import React from 'react';
import PropTypes from 'prop-types';

const UNinja = props => {
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
      <path d="M19.44 5.34l-.06-.07a10 10 0 00-14.76 0l-.06.07A10 10 0 1022 12a9.93 9.93 0 00-2.56-6.66zM12 4a7.87 7.87 0 013.86 1H8.14A7.87 7.87 0 0112 4zM5.76 7h12.48a8 8 0 011.69 4H4.07a8 8 0 011.69-4zM12 20a8 8 0 01-7.93-7h15.86A8 8 0 0112 20zM8 8a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2zm-3 9.93a1 1 0 00.994-.007 1 1 0 00.366-.373A3 3 0 0115 16a1 1 0 000-2 5 5 0 00-4.37 2.57 1 1 0 00.37 1.36z"></path>
    </svg>
  );
};

UNinja.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UNinja.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UNinja;
