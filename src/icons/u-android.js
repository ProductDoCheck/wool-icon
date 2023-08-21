import React from 'react';
import PropTypes from 'prop-types';

const UAndroid = props => {
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
      <path d="M14.975 3.019l.96-1.732a.194.194 0 00-.075-.263.193.193 0 00-.263.076l-.97 1.75a6.541 6.541 0 00-5.253 0l-.97-1.75a.193.193 0 00-.34.187l.96 1.732a5.546 5.546 0 00-3.092 4.876h12.137a5.547 5.547 0 00-3.094-4.876zM9.2 5.674a.507.507 0 110-1.013.507.507 0 010 1.013zm5.602 0a.507.507 0 110-1.013.507.507 0 010 1.013zM5.93 17.172A1.467 1.467 0 007.4 18.639h.973v3a1.36 1.36 0 102.721 0v-3h1.814v3a1.36 1.36 0 102.72 0v-3h.975a1.467 1.467 0 001.467-1.467V8.375H5.93v8.797zm-1.867-9.03a1.362 1.362 0 00-1.36 1.36v5.669a1.36 1.36 0 102.72 0V9.502a1.362 1.362 0 00-1.36-1.36zm15.872 0a1.362 1.362 0 00-1.36 1.36v5.669a1.361 1.361 0 102.72 0V9.502a1.362 1.362 0 00-1.36-1.36z"></path>
    </svg>
  );
};

UAndroid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UAndroid.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UAndroid;
