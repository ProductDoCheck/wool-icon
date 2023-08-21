import React from 'react';
import PropTypes from 'prop-types';

const UPanoramaHAlt = props => {
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
      <path d="M21.46 5.83A1 1 0 0020.7 5h-.11A37.49 37.49 0 003.41 5H3.3a1 1 0 00-.76.8 35.52 35.52 0 000 12.34 1 1 0 00.76.8h.11A37.623 37.623 0 0012 20a37.62 37.62 0 008.59-1h.11a1 1 0 00.76-.8 35.52 35.52 0 000-12.37zM19.6 17.17a35.422 35.422 0 01-15.2 0 33.2 33.2 0 010-10.34 35.42 35.42 0 0115.2 0c.54 3.425.54 6.915 0 10.34z"></path>
    </svg>
  );
};

UPanoramaHAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UPanoramaHAlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UPanoramaHAlt;
