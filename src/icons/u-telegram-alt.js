import React from 'react';
import PropTypes from 'prop-types';

const UTelegramAlt = props => {
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
      <path d="M22.265 2.428a2.049 2.049 0 00-2.079-.324L2.266 9.339a2.043 2.043 0 00.104 3.818l3.625 1.261 2.02 6.682c.028.089.068.174.119.252.008.012.019.021.027.033a.988.988 0 00.281.265c.095.063.2.11.31.136l.013.001.006.003c.067.014.135.02.203.02l.018-.003a.992.992 0 00.301-.052c.023-.008.042-.02.064-.03a.994.994 0 00.205-.114l.152-.129 2.702-2.983 4.03 3.122c.355.276.792.427 1.241.427a2.054 2.054 0 002.008-1.633l3.263-16.017a2.03 2.03 0 00-.693-1.97zM9.37 14.736a.994.994 0 00-.272.506l-.31 1.504-.784-2.593 4.065-2.117-2.699 2.7zm8.302 5.304l-4.763-3.69a1.001 1.001 0 00-1.353.12l-.866.955.306-1.487 7.083-7.083a1 1 0 00-1.169-1.593L6.745 12.554 3.02 11.191 20.999 4 17.672 20.04z"></path>
    </svg>
  );
};

UTelegramAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTelegramAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTelegramAlt;