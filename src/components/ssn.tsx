import React from 'react';

/**
 * A component that renders an input field for Social Security Number (SSN).
 * @param props - The component props.
 * @param ref - The ref to be forwarded to the input element.
 * @returns The rendered SSNInput component.
 */
const SSNInput = React.forwardRef(function SSNInput(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Social Security Number (SSN)</label>
                <input name='ssn' type='text' pattern='\d{3}-\d{2}-\d{4}' placeholder='123-45-6789'
                required/>
            </div>
        </fieldset>
    );
});

export default SSNInput;
