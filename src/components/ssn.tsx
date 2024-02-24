import React from 'react';

/**
 * Renders an input field for Social Security Number (SSN).
 * @returns {React.JSX.Element} The JSX element representing the SSN input field.
 */
export default function SSNInput(): React.JSX.Element {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Social Security Number (SSN)</label>
                <input name='ssn' type='text' pattern='\d{3}-\d{2}-\d{4}' placeholder='123-45-6789'
                required/>
            </div>
        </fieldset>
    );
};