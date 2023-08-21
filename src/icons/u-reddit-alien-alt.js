import React from 'react';
import PropTypes from 'prop-types';

const URedditAlienAlt = props => {
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
      <path d="M14.41 16.867c-.682.5-1.527.726-2.368.633a3.368 3.368 0 01-2.365-.632 1 1 0 00-1.416 1.414 5.11 5.11 0 003.781 1.218 5.12 5.12 0 003.782-1.217 1.003 1.003 0 00.003-1.416 1.001 1.001 0 00-1.417 0zM9.2 15.002a.999.999 0 100-1.998.999.999 0 000 1.998zm6-2a1 1 0 100 2.001 1 1 0 000-2.001zM23 11.78a3.772 3.772 0 00-6.794-2.264c-1-.255-2.02-.415-3.05-.479l.856-5.705 2.087.71a2.997 2.997 0 005.994-.064v-.023a3.029 3.029 0 00-3-2.955 2.977 2.977 0 00-2.332 1.155l-3.238-1.101a1 1 0 00-1.312.798l-1.077 7.175c-1.127.05-2.246.213-3.34.489a3.768 3.768 0 00-6.225 4.234A4.862 4.862 0 001 16c0 3.925 4.832 7 11 7s11-3.075 11-7a4.86 4.86 0 00-.569-2.249 3.783 3.783 0 00.569-1.97zM19.093 3a1 1 0 11-1 1 1.017 1.017 0 011-1zM4.78 10c.311.004.615.09.882.25a9.98 9.98 0 00-2.648 1.673C3.01 11.876 3 11.828 3 11.78A1.782 1.782 0 014.78 10zM12 21c-4.879 0-9-2.29-9-5s4.121-5 9-5 9 2.29 9 5-4.121 5-9 5zm8.986-9.077a9.978 9.978 0 00-2.648-1.674c.267-.16.57-.245.882-.249A1.782 1.782 0 0121 11.78c0 .048-.01.096-.014.143z"></path>
    </svg>
  );
};

URedditAlienAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

URedditAlienAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default URedditAlienAlt;
