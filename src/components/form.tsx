'use client';

import React, { ChangeEvent } from 'react';
import InputName from '@/components/name';
import SSNInput from '@/components/ssn';
import Submit from '@/components/submit';
import Payrate from '@/components/payrate';
import Hours from '@/components/hours';
import Shift from '@/components/shift';
import Data, { IForm } from '@/utility/data';

export default function Form(): React.JSX.Element {

    const [state, dispatch] = React.useReducer(
        Data.reducer, {
            name: '',
            lastName: '',
            ssn: 0
        } as IForm
    );


    const handler = (event: ChangeEvent<HTMLFormElement>) => {
        console.log(event.target.name)
    }

    return (
        <form className='bg-gray-100 rounded-xl border-black border p-5' onChange={handler}>
            <div className='grid grid-cols-2 gap-5 bg-grey-50'>
                <InputName/>
                <SSNInput/>
                <Shift/>
                <Payrate/>
                <Hours/>
                <Submit/>
            </div>
        </form>
    );
}