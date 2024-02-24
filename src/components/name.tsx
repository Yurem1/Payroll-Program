import React from 'react';
import { name_form as NAME_FORM } from '@/files/form.json'

/**
 * Renders an input form for the name component.
 * @returns {React.JSX.Element} The rendered input form.
 */
export default function InputName(): React.JSX.Element[] {

    /**
     * Generates an array of JSX elements for the input form.
     * @returns An array of JSX elements representing the input form.
     */
    function labelForm(): React.JSX.Element[] {  
        return Object.entries(NAME_FORM).map(([key, { input, label, placeholder }]) => {
            return (
                <fieldset key={key}>
                    <div className='flex flex-col'>
                        <label>{label}</label>
                        <input name={input} type='text' placeholder={placeholder} maxLength={12}
                        required/>
                    </div>
                </fieldset>
            );
        });
    }

    return labelForm();
}