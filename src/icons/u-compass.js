import React from 'react';
import PropTypes from 'prop-types';

const UCompass = props => {
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
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.93V19a1 1 0 00-2 0v.93A8 8 0 014.07 13H5a1 1 0 000-2h-.93A8 8 0 0111 4.07V5a1 1 0 002 0v-.93A8 8 0 0119.93 11H19a1 1 0 000 2h.93A8 8 0 0113 19.93zm2.14-12.38l-5 2.12a1 1 0 00-.52.52l-2.12 5a1 1 0 00.21 1.1 1 1 0 00.7.3.93.93 0 00.4-.09l5-2.12a1 1 0 00.52-.52l2.12-5a1 1 0 00-1.31-1.31zm-2.49 5.1l-2.28 1 1-2.28 2.28-1-1 2.28z"></path>
    </svg>
  );
};

UCompass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCompass.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCompass;
