'use client';

import React from 'react';

/**
 * A submit button component.
 *
 * @component
 * @param {object} props - The props for the Submit component.
 * @param {React.Ref} ref - The ref to attach to the Submit component.
 * @returns {JSX.Element} The rendered Submit component.
 */
const Submit = React.forwardRef(function Submit(props, ref) {

    return (
        <fieldset className='col-span-2'>
            <div className='flex flex-col'>
                <button className='rounded-xl bg-gray-200 border-black border-2' 
                type='submit'>Submit</button>
            </div>
        </fieldset>
    );
});

export default Submit;