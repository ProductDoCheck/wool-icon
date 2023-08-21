import React from 'react';
import PropTypes from 'prop-types';

const UTelegram = props => {
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
      <path d="M11.994 2a10 10 0 100 20 10 10 0 000-20zm3.18 15.152a.705.705 0 01-1.002.352l-2.715-2.11-1.742 1.608a.3.3 0 01-.285.039l.334-2.989.01.009.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.149-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258l-1.908 9.747z"></path>
    </svg>
  );
};

UTelegram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UTelegram.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UTelegram;
