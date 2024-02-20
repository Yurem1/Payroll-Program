import React from 'react';

/**
 * Represents a Shift component.
 * @param {object} props - The props for the Shift component.
 * @param {React.Ref} ref - The ref for the Shift component.
 * @returns {JSX.Element} The rendered Shift component.
 */
const Shift = React.forwardRef(function Shift(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Shift type</label>
                <input name='shift' type='text' placeholder='Evening shift'
                required/>
            </div>
        </fieldset>
    );
});

export default Shift;