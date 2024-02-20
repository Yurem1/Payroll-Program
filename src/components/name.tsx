import React from 'react';
import { name_form as NAME_FORM } from '@/files/form.json'

/**
 * Renders an input form for the name component.
 * @param props - The component props.
 * @param ref - The ref to forward to the underlying input element.
 * @returns The rendered input form.
 */
const InputName = React.forwardRef(function InputName(props, ref) {

    /**
     * Generates an array of JSX elements for the input form.
     * @returns An array of JSX elements representing the input form.
     */
    const labelForm = (): React.JSX.Element[] => {        
        return Object.entries(NAME_FORM).map(([key, value]) => {
            return (
                <fieldset key={key}>
                    <div className='flex flex-col'>
                        <label>{value.input}</label>
                        <input name={value.input} type='text' placeholder={value.placeholder}
                        required/>
                    </div>
                </fieldset>
            );
        });
    }

    return labelForm();
});

export default InputName;