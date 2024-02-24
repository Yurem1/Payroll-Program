import React from 'react';

/**
 * Represents the Payrate component.
 * @returns {JSX.Element} The rendered Payrate component.
 */
export default function Payrate(): React.JSX.Element {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Payrate</label>
                <input name='payRate' type='number' min={0} max={5} placeholder='0'
                required/>
            </div>
        </fieldset>
    );
}