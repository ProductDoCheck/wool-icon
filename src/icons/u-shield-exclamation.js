import React from 'react';
import PropTypes from 'prop-types';

const UShieldExclamation = props => {
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
      <path d="M12.92 15a.561.561 0 00-.09-.17l-.12-.15a1 1 0 00-1.54.15.561.561 0 00-.09.17.699.699 0 00-.06.19 1.23 1.23 0 000 .19.88.88 0 00.08.39 1 1 0 001.3.54c.121-.054.233-.129.33-.22.09-.092.161-.2.21-.32.053-.123.08-.256.08-.39a1.23 1.23 0 000-.19.702.702 0 00-.1-.19zM12 7.36a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm7.63-3.71a1 1 0 00-.84-.2 8 8 0 01-6.22-1.27 1 1 0 00-1.14 0 8 8 0 01-6.22 1.27A1 1 0 004 4.43v7.45a9 9 0 003.77 7.33l3.65 2.6a1 1 0 001.16 0l3.65-2.6A9 9 0 0020 11.88V4.43a1 1 0 00-.37-.78zM18 11.88a7 7 0 01-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 016 11.88v-6.3a10 10 0 006-1.39 10 10 0 006 1.39v6.3z"></path>
    </svg>
  );
};

UShieldExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UShieldExclamation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UShieldExclamation;
