import React from 'react';
import { shift as SHIFT } from '@/files/form.json'

const Shift = React.forwardRef(function Shift(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>{SHIFT.input}</label>
                <input type='text' placeholder={SHIFT.placeholder}/>
            </div>
        </fieldset>
    );
});

export default Shift;