import React from 'react';
import PropTypes from 'prop-types';
import './TextArea/TextArea.css'


export default function TextArea({ label, placeholder, focus, disabled, inputValue, loading, className, labelClassName }) {
  return (
    <div className="text-area-wrapper">
        <label className={labelClassName}>{label}</label>
        {
            <textarea className={`${className}`} type="text" placeholder={placeholder} autoFocus={focus} disabled={disabled} value={inputValue}/>
        }
    </div>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
  inputValue: PropTypes.string
}

TextArea.defaultProps = {
  label: 'Input Label',
  labelClassName: 'text-area-label',
  placeholder: 'Placeholder:',
  loading: false,
  disabled: false,
  focus: true,
  inputValue: 'Input value'
}