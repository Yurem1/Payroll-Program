import React from 'react';
import { ssn_form as SSN_FORM } from '@/files/form.json';

const SSNInput = React.forwardRef(function SSNInput(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Social Security Number (SSN)</label>
                <input name='SSN' type='text' pattern='\d{3}-\d{2}-\d{4}' placeholder='123-45-6789'/>
            </div>
        </fieldset>
    );
});

export default SSNInput;
