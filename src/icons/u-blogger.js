import React from 'react';
import PropTypes from 'prop-types';

const UBlogger = props => {
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
      <path d="M9.71 10.46h2.239a.77.77 0 000-1.542H9.71a.77.77 0 100 1.542zm9.718-8.458H4.555a2.573 2.573 0 00-2.563 2.563v14.873a2.573 2.573 0 002.563 2.564h14.873a2.572 2.572 0 002.564-2.564V4.565a2.573 2.573 0 00-2.564-2.563zm-1.072 9.678l-.02 2.675a4.051 4.051 0 01-4.038 4.022h-4.64a4.05 4.05 0 01-4.041-4.025V9.657a4.053 4.053 0 014.042-4.03h2.823a4.46 4.46 0 013.12 2.2c.223.422.347.89.362 1.367.068.506.103.881.33 1.09.32.289 1.508.094 1.743.278l.178.14.11.222.035.177-.004.579zm-4.097 1.863H9.71a.75.75 0 100 1.5h4.549a.752.752 0 00.71-1.041.75.75 0 00-.71-.459z"></path>
    </svg>
  );
};

UBlogger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UBlogger.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UBlogger;
