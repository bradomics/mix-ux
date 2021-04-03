import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css'


export default function TextInput({ label, placeholder, focus, disabled, inputValue, loading, className, labelClassName }) {
  return (
    <div className="text-input-wrapper">
        <label className={labelClassName}>{label}</label>
        {
            <input className={`${className}`} type="text" placeholder={placeholder} autoFocus={focus} disabled={disabled} value={inputValue}/>
        }
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  inputValue: PropTypes.string
}

TextInput.defaultProps = {
  label: 'Input Label',
  labelClassName: 'text-input-label',
  placeholder: 'Placeholder:',
  loading: false,
  disabled: false,
  focus: true,
  inputValue: 'Input value'
}