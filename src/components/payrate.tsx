import React from 'react';

/**
 * Represents the Payrate component.
 * @param {object} props - The component props.
 * @param {React.Ref} ref - The ref object.
 * @returns {JSX.Element} The rendered Payrate component.
 */
const Payrate = React.forwardRef(function Payrate(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Payrate</label>
                <input name='payRate' type='number' min={0} max={5} placeholder='0'
                required/>
            </div>
        </fieldset>
    );
});

export default Payrate;