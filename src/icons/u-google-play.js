import React from 'react';
import PropTypes from 'prop-types';

const UGooglePlay = props => {
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
      <path d="M20.919 10.653c-.315-.17-3.01-1.734-4.023-2.323l-.003-.002L4.64 1.253a1.679 1.679 0 00-1.408-.16.953.953 0 00-.076.03c-.059.02-.117.043-.173.07a1.519 1.519 0 00-.738 1.364v18.986a1.435 1.435 0 00.692 1.27c.05.025.102.046.155.064a1.38 1.38 0 00.533.118c.292-.003.579-.083.831-.232l12.438-7.182 4.021-2.322a1.525 1.525 0 00.842-1.334 1.49 1.49 0 00-.837-1.272zM4.244 19.839V4.102l7.94 7.859-7.94 7.878zm5.018-2.162l4.344-4.31 1.15 1.139-5.494 3.171zm4.342-7.125L9.206 6.2l5.554 3.207-1.156 1.146zm2.947 2.917l-1.526-1.51 1.528-1.516c.72.419 1.843 1.07 2.616 1.515l-2.618 1.511z"></path>
    </svg>
  );
};

UGooglePlay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UGooglePlay.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UGooglePlay;