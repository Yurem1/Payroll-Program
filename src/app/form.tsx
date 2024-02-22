'use client';

import React from 'react';
import InputName from '@/components/name';
import SSNInput from '@/components/ssn';
import Submit from '@/components/submit';
import Payrate from '@/components/payrate';
import Hours from '@/components/hours';
import Shift from '@/components/shift';

/**
 * Renders a form component.
 *
 * @returns The JSX element representing the form.
 */
export default function Form(): React.JSX.Element {
    return (
        <form className='bg-gray-100 rounded-xl border-black border p-5' 
        action='/result' method='get'>
            <div className='grid grid-cols-2 gap-5'>
                <InputName/> <SSNInput/> <Shift/> <Payrate/> <Hours/> <Submit/>
            </div>
        </form>
    );
}