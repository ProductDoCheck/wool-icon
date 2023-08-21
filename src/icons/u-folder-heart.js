import React from 'react';
import PropTypes from 'prop-types';

const UFolderHeart = props => {
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
      <path d="M12 9.84a2.92 2.92 0 00-3.43 4.65l2.72 2.72a1.002 1.002 0 001.42 0l2.72-2.72A2.92 2.92 0 0012 9.84zm2 3.23l-2 2-2-2a.92.92 0 011.3-1.3 1 1 0 001.42 0 .92.92 0 011.3 1.3H14zm5-7.57h-6.28l-.32-1a3 3 0 00-2.84-2H5a3 3 0 00-3 3v13a3 3 0 003 3h14a3 3 0 003-3v-10a3 3 0 00-3-3zm1 13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4.56a1 1 0 01.95.68l.54 1.64a1 1 0 00.95.68h7a1 1 0 011 1v10z"></path>
    </svg>
  );
};

UFolderHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UFolderHeart.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UFolderHeart;
