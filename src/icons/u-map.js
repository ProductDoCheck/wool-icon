import React from 'react';
import PropTypes from 'prop-types';

const UMap = props => {
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
      <path d="M21.32 5.05l-6-2h-.07a.7.7 0 00-.14 0h-.43L9 5 3.32 3.05a1 1 0 00-.9.14A1 1 0 002 4v14a1 1 0 00.68.95l6 2a1 1 0 00.62 0l5.7-1.9L20.68 21c.106.014.214.014.32 0a.94.94 0 00.58-.19A1.001 1.001 0 0022 20V6a1 1 0 00-.68-.95zM8 18.61l-4-1.33V5.39l4 1.33v11.89zm6-1.33l-4 1.33V6.72l4-1.33v11.89zm6 1.33l-4-1.33V5.39l4 1.33v11.89z"></path>
    </svg>
  );
};

UMap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMap.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMap;