import React from 'react';
import { name_form as NAME_FORM } from '@/files/form.json'

const InputName = React.forwardRef(function InputName(props, ref) {

    const labelForm = (): React.JSX.Element[] => {        
        return Object.entries(NAME_FORM).map(([key, value]) => {
            return (
                <fieldset key={key}>
                    <div className='flex flex-col'>
                        <label>{value.input}</label>
                        <input name={value.input} type='text' placeholder={value.placeholder}/>
                    </div>
                </fieldset>
            );
        });
    }

    return labelForm();
});

export default InputName;