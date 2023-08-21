import React from 'react';
import PropTypes from 'prop-types';

const UMedal = props => {
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
      <path d="M21.38 5.76a1 1 0 00-.47-.61l-5.2-3a1 1 0 00-1.37.36L12 6.57 9.66 2.51a1 1 0 00-1.37-.36l-5.2 3a1 1 0 00-.47.61 1 1 0 00.1.75l4 6.83A5.91 5.91 0 006 16a6 6 0 1011.34-2.72l3.9-6.76a1 1 0 00.14-.76zM5 6.38l3.46-2L11.68 10A5.94 5.94 0 008 11.58l-3-5.2zM12 20a4 4 0 110-8 4 4 0 010 8zm4-8.45a5.901 5.901 0 00-1.86-1.15l-.98-1.83 2.42-4.19 3.46 2L16 11.55z"></path>
    </svg>
  );
};

UMedal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UMedal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UMedal;
