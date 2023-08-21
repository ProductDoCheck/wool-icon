import React from 'react';
import PropTypes from 'prop-types';

const UBox = props => {
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
      <path d="M20.49 7.52a.193.193 0 010-.08.172.172 0 010-.07v-.09l-.06-.15a.478.478 0 00-.09-.11l-.09-.08h-.05l-3.94-2.49-3.72-2.3a.849.849 0 00-.29-.15h-.08a.82.82 0 00-.27 0h-.1c-.116.026-.228.07-.33.13L4 6.78l-.09.07-.09.08-.1.07-.05.06-.06.15v.15a.69.69 0 000 .2v8.73a1 1 0 00.47.85l7.5 4.64.15.06h.08a.86.86 0 00.52 0h.08l.15-.06L20 17.21a1 1 0 00.47-.85V7.63s.02-.07.02-.11zM12 4.17l1.78 1.1-5.59 3.46-1.79-1.1L12 4.17zm-1 15l-5.5-3.36V9.42l5.5 3.4v6.35zm1-8.11l-1.91-1.15 5.59-3.47 1.92 1.19-5.6 3.43zm6.5 4.72L13 19.2v-6.38l5.5-3.4v6.36z"></path>
    </svg>
  );
};

UBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBox.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBox;
