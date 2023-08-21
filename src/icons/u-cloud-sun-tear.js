import React from 'react';
import PropTypes from 'prop-types';

const UCloudSunTear = props => {
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
      <path d="M11.05 14.33a1 1 0 00-1.11 0c-.1.08-2.44 1.67-2.44 4.17a3 3 0 006 0c0-2.5-2.34-4.1-2.45-4.17zm-.55 5.17a1 1 0 01-1-1 3 3 0 011-2 3 3 0 011 2 1 1 0 01-1 1zM21 7.5h-.8a4.25 4.25 0 00-.52-1.27l.56-.56a1 1 0 00-1.41-1.41l-.56.56A4.25 4.25 0 0017 4.3v-.8a1 1 0 00-2 0v.8a4.1 4.1 0 00-1.26.52l-.57-.56a1 1 0 00-1.41 1.41l.56.57c-.09.15-.16.32-.24.48a5.85 5.85 0 00-1.58-.22 6 6 0 00-5.94 5.13 3.5 3.5 0 00-.46 6.58c.127.05.263.078.4.08a1 1 0 00.4-1.92A1.48 1.48 0 014 15a1.5 1.5 0 011.5-1.5 1 1 0 001-1 4 4 0 017.78-1.29 1 1 0 00.78.67 2.32 2.32 0 01.94 4.23 1.004 1.004 0 001.1 1.68 4.3 4.3 0 001.65-5.18l.13.13a1 1 0 001.41 0 1 1 0 000-1.41l-.56-.56c.223-.396.382-.824.47-1.27h.8a1 1 0 100-2zm-3.34 2.65a2.45 2.45 0 01-.6.41A4.17 4.17 0 0016 10a6.12 6.12 0 00-2.09-2.49c.11-.257.265-.49.46-.69a2.42 2.42 0 013.29 0 2.37 2.37 0 010 3.3v.03z"></path>
    </svg>
  );
};

UCloudSunTear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UCloudSunTear.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UCloudSunTear;
