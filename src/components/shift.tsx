import React from 'react';

const Shift = React.forwardRef(function Shift(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Shift type</label>
                <input name='Shift' type='text' placeholder='Blue-collar'/>
            </div>
        </fieldset>
    );
});

export default Shift;