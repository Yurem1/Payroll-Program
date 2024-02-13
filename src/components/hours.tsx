import React from 'react';
import { hours as HOURS } from '@/files/form.json'

const Hours = React.forwardRef(function Hours(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>{HOURS.input}</label>
                <input type='number' min={0} maxLength={72} placeholder={HOURS.placeholder}/>
            </div>
        </fieldset>
    );
});

export default Hours;