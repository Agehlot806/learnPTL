import React from 'react';

const Button = (props) => {
  const {
    onClick,
    label,
    type = 'button',
    disabled = false,
    style = {},
    className = '',
    hoverColor = disabled ? '#fff': className, // default hover color
    icon,
    iconPosition = 'left',
    ...otherProps
  } = props;

  const buttonStyle = {
    padding: '8px',
    // fontSize: '16px',
    cursor: 'pointer',
    // backgroundColor: disabled ? '#ccc' : '#007bff',
    backgroundColor: disabled ? '#ccc': className,
    // color: '#fff',
    // border: 'none',
    borderRadius: '4px',
    outline: 'none',
    marginRight: '6px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease', // smooth transition on hover
    ...style,
  };

  const hoverButtonStyle = {
    ...buttonStyle,
    backgroundColor: hoverColor,
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={buttonStyle}
      className={className}
      {...otherProps}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = buttonStyle.backgroundColor;
      }}
    >
      {iconPosition === 'left' && icon && <i className={icon} style={{ marginRight: '8px' }} />} {/* Render the icon before the label */}
      {label}
      {iconPosition === 'right' && icon && <i className={icon} style={{ marginLeft: '8px' }} />}
    </button>
  );
};

export default Button;
