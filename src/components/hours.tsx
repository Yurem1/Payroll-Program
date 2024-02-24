import React from 'react';

/**
 * Renders a component for entering hours worked.
 * @returns {React.JSX.Element} The rendered component.
 */
export default function Hours(): React.JSX.Element {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Hours Worked</label>
                <input name='hoursWorked' type='number' min={0} max={72} placeholder='0' 
                required/>
            </div>
        </fieldset>
    );
};
