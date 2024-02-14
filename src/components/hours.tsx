import React from 'react';

const Hours = React.forwardRef(function Hours(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Hours Worked</label>
                <input name='Hours' type='number' min={0} max={72} placeholder='0'/>
            </div>
        </fieldset>
    );
});

export default Hours;