import React from 'react';
import InputName from '@/components/name_form';
import SSNInput from '@/components/ssn_form';

export default function Form(): React.JSX.Element {
    return (
        <form className='bg-gray-100 rounded-xl p-3'>
            <div className='grid grid-cols-2 gap-2 bg-grey-50'>
                <InputName/>
                <SSNInput/>
            </div>
        </form>
    );
}