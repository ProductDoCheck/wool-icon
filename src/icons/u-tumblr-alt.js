import React from 'react';
import PropTypes from 'prop-types';

const UTumblrAlt = props => {
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
      <path d="M17.434 20.508l-.962-2.853a1.001 1.001 0 00-1.38-.583 3.764 3.764 0 01-1.208.249.936.936 0 01-.66-.165 1.2 1.2 0 01-.239-.808v-4.347h3.017a.998.998 0 001-1V7.095a.998.998 0 00-1-1H13V2a.998.998 0 00-1-1H9.07a1.148 1.148 0 00-1.137 1.04 5.093 5.093 0 01-3.28 4.558 1 1 0 00-.662.94v3.585a1 1 0 001 1h1.025v4.535a6.411 6.411 0 001.886 4.478A6.904 6.904 0 0012.877 23c.054 0 .108 0 .163-.002 1.546-.025 3.618-.647 4.273-1.607a1 1 0 00.12-.883zm-4.427.49a4.87 4.87 0 01-3.702-1.288 4.37 4.37 0 01-1.29-3.052v-5.535a1 1 0 00-1-1H5.992V8.206A6.954 6.954 0 009.81 3H11v4.095a.998.998 0 001 1h3.002V10h-3.017a.998.998 0 00-1 1v5.365a3.077 3.077 0 00.857 2.235 2.766 2.766 0 002.096.72c.318-.011.635-.05.947-.113l.425 1.26a5.908 5.908 0 01-2.303.532z"></path>
    </svg>
  );
};

UTumblrAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTumblrAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTumblrAlt;
