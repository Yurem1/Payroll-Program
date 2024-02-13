import React from 'react';
import { ssn_form as SSN_FORM } from '@/files/form.json';

const SSNInput = React.forwardRef(function SSNInput(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>{SSN_FORM.input}</label>
                <input type='text' pattern='\d{3}-\d{2}-\d{4}' placeholder={SSN_FORM.placeholder}/>
            </div>
        </fieldset>
    );
});

export default SSNInput;
