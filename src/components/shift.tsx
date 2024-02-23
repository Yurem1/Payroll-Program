import React from 'react';
import { shift as SHIFT } from '@/files/form.json';

/**
 * Represents a Shift component.
 * @param {object} props - The props for the Shift component.
 * @param {React.Ref} ref - The ref for the Shift component.
 * @returns {JSX.Element} The rendered Shift component.
 */
const Shift = React.forwardRef(function Shift(props, ref) {
    
    function displayShiftOptions(): React.JSX.Element[] {
        return Object.entries(SHIFT.options).map(([key, value]) => {
            return (
                <option key={key} value={value}>
                    {value}
                </option>
            );
        });
    }

    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Choose Shift</label>
                <select name='shift' required>
                    {displayShiftOptions()}
                </select>
            </div>
        </fieldset>
    );
});

export default Shift;