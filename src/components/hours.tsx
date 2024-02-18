import React from 'react';

/**
 * Renders a component for entering hours worked.
 * @param {object} props - The component props.
 * @param {React.Ref} ref - The ref object.
 * @returns {React.ReactNode} The rendered component.
 */
const Hours = React.forwardRef(function Hours(props, ref) {
    return (
        <fieldset>
            <div className='flex flex-col'>
                <label>Hours Worked</label>
                <input name='hoursWorked' type='number' min={0} max={72} placeholder='0'/>
            </div>
        </fieldset>
    );
});

export default Hours;