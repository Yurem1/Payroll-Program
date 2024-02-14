import React from 'react';

const Payrate = React.forwardRef(function Payrate(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Payrate</label>
                <input name='Payrate' type='number' min={0} max={5} placeholder='0'/>
            </div>
        </fieldset>
    );
});

export default Payrate;