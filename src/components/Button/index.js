import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export default function Button({
  to,
  href,
  filled = false,
  outline = false,
  large = false,
  small = false,
  disabled = false,
  children,
  className,
  rightIcon,
  leftIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link
  } else if (href) {
    props.href = href;
    Comp = 'a'
  }

  if (disabled) {
    Object.keys(props).forEach( key => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
        }
    })
  }

  const classes = {
    [className]: className,
    filled,
    outline,
    large,
    small,
    disabled
  };

  let btnClasses = ["btn__wrapper"];
  for (var value in classes) {
    if (classes[value]) btnClasses.push(value);
  }

  return (
    <Comp className={btnClasses.join(' ')} {...props}>
      {leftIcon && <span className="btn__icon--left">{leftIcon}</span>}
      <span className="btn__title">{children}</span>
      {rightIcon && <span className="btn__icon--right">{rightIcon}</span>}
    </Comp>
  );
}
