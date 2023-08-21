import React from 'react';
import PropTypes from 'prop-types';

const ULifeRing = props => {
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
      <path d="M22 11.05v-.33l-.09-.6-.09-.39c0-.17-.08-.34-.13-.51a4.75 4.75 0 00-.13-.4 2.175 2.175 0 01-.07-.24v-.05a10.1 10.1 0 00-5.9-5.9h-.05l-.23-.07-.42-.13c-.15 0-.31-.08-.46-.12l-.46-.1-.46-.07c-.16 0-.31 0-.48-.06-.17-.06-.35 0-.52 0L12 2h-.91c-.17 0-.32 0-.48.06l-.46.07-.46.1c-.15 0-.31.07-.46.12l-.42.13-.23.07h-.05a10.1 10.1 0 00-5.9 5.9v.05a2.173 2.173 0 01-.07.24c0 .13-.09.26-.13.4-.04.14-.09.34-.13.51l-.09.39-.09.6v2.56l.09.6.09.39c0 .17.08.34.13.51.05.17.08.27.13.4.028.079.051.159.07.24a.43.43 0 010 .07 10 10 0 005.89 5.88h.05l.24.07.4.13.51.13.39.09.6.09h.33c.31 0 .63.05.95.05.32 0 .64 0 .95-.05h.33l.6-.09.39-.09.51-.13.4-.13.24-.07h.05a10.001 10.001 0 005.89-5.88.43.43 0 010-.07c0-.08.05-.16.07-.24.02-.08.09-.26.13-.4.04-.14.09-.34.13-.51l.09-.39.09-.6v-.33c0-.31.05-.63.05-.95 0-.32.09-.56.09-.87zm-6.3-6.16a8 8 0 013.46 3.46l-2.86 1a5.14 5.14 0 00-1.64-1.64l1.04-2.82zm-5.36-.7c.21-.05.41-.08.61-.11h.24a8.24 8.24 0 011.72 0h.24c.2 0 .4.06.61.11h.06l-1 2.86A4.49 4.49 0 0012 7a4.4 4.4 0 00-.73.06l-1-2.86.07-.01zm-1.94.7l1 2.86a5.14 5.14 0 00-1.65 1.64l-2.86-1a8 8 0 013.46-3.5h.05zm-4.21 8.82a4.168 4.168 0 01-.1-.6v-.25a7.42 7.42 0 010-1.72v-.25c.019-.202.052-.403.1-.6v-.06l2.86 1a4.47 4.47 0 000 1.46l-2.86 1v.02zm4.16 5.4a8 8 0 01-3.46-3.46l2.86-1a5.14 5.14 0 001.64 1.64l-1.04 2.82zm5.36.7c-.21.05-.41.08-.61.11h-.24a8.24 8.24 0 01-1.72 0h-.24c-.2 0-.4-.06-.61-.11h-.06l1-2.86c.483.08.977.08 1.46 0l1 2.86h.02zm-.67-5c-.17.06-.34.1-.5.14-.33.062-.67.062-1 0-.16 0-.33-.08-.5-.14A3 3 0 019.2 13a3.23 3.23 0 01-.14-.51 2.63 2.63 0 010-1A3 3 0 0111 9.2c.17-.06.34-.1.5-.14a2.73 2.73 0 011 0c.16 0 .33.08.5.14a3 3 0 011.8 1.8c.06.166.107.336.14.51.064.33.064.67 0 1A3 3 0 0113 14.8l.04.01zm2.61 4.31l-1-2.86a5.14 5.14 0 001.64-1.64l2.86 1a8 8 0 01-3.5 3.49v.01zM20 12.86v.25a4.171 4.171 0 01-.1.6v.06l-2.86-1a4.47 4.47 0 000-1.46l2.86-1v.06c.048.197.081.398.1.6v.25a7.417 7.417 0 010 1.72v-.08z"></path>
    </svg>
  );
};

ULifeRing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ULifeRing.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ULifeRing;
