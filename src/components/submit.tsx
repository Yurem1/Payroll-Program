import React from 'react';

const Submit = React.forwardRef(function Submit(props, ref) {
    return (
        <fieldset className='col-span-2'>
            <div className='flex flex-col'>
                <button className='rounded-xl bg-white border-2' type='submit'>Submit</button>
            </div>
        </fieldset>
    );
});

export default Submit;