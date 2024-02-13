import React from 'react';
import { payrate as PAYRATE } from '@/files/form.json'

const Payrate = React.forwardRef(function Payrate(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>{PAYRATE.input}</label>
                <input type='number' min={0} max={5} placeholder={PAYRATE.placeholder}/>
            </div>
        </fieldset>
    );
});

export default Payrate;