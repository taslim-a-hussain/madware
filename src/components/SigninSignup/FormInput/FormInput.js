import React from 'react';
import './FormInput.scss';


const FormInput = ({handleChange, label, ...properties}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...properties} />
        {
            label ?
            (
                <label className={`${properties.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) :
            null
        }
    </div>
);


export default FormInput;