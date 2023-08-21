import React from 'react';
import PropTypes from 'prop-types';

const UVuejs = props => {
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
      <path d="M18.03 2.443h-3.642L12.012 6.4 9.63 2.444l-2.646-.001H.831L12.03 21.558 23.168 2.443H18.03zm-6.005 15.15L4.322 4.443h2.824l4.885 8.406 4.847-8.407h2.81l-7.663 13.15z"></path>
    </svg>
  );
};

UVuejs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UVuejs.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UVuejs;
