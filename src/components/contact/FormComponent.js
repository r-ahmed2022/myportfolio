/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const FormComponent = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label, errorMessage, onChange, value, ...input
  } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="forminput">
      <label><h6 style={{ 'font-size': '1.5rem' }}>{label}</h6></label>
      <br />
      { !props.isTextarea
        ? (
          <input
            {...input}
            onChange={(e) => onChange(e)}
            onBlur={handleFocus}
            focused={focused.toString()}
            value={value}
          />
        )
        : (
          <textarea
            {...input}
            onChange={(e) => onChange(e)}
            onBlur={handleFocus}
            focused={focused.toString()}
            value={value}
          />
        )}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormComponent;
