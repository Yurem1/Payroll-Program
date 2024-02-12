import React from 'react';
import { name_form as NAME_FORM } from '@/files/form.json'

const InputName = React.forwardRef(function InputName(props, ref) {

    const labelForm = (): React.JSX.Element[] => {        
        return Object.entries(NAME_FORM).map(([key, value]) => {

            return (
                <div key={key} className='flex flex-col'>
                    <label>{value}</label>
                    <input type='text'/>
                </div>
            );
        });
    }

    return labelForm();
});

export default InputName;