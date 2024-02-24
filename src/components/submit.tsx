import React from 'react';

/**
 * A submit button component.
 * @returns {React.JSX.Element} The rendered Submit component.
 */
export default function Submit(): React.JSX.Element {
    return (
        <fieldset className='col-span-2'>
            <div className='flex flex-col'>
                <button className='rounded-xl bg-gray-200 border-black border-2' 
                type='submit'>Submit</button>
            </div>
        </fieldset>
    );
};