import React from 'react';
import InputName from './name_form';

export default function Form(): React.JSX.Element {
    return (
        <div className='grid grid-cols-2 gap-2 bg-grey-50'>
            <InputName/>
        </div>
    )
}