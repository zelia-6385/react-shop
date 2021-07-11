import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = React.memo(({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
});

// Добавить остальные PropTypes
Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  outline: PropTypes.bool,
};

export default Button;
