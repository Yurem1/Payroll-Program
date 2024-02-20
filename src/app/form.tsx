'use client';

import React from 'react';
import InputName from '@/components/name';
import SSNInput from '@/components/ssn';
import Submit from '@/components/submit';
import Payrate from '@/components/payrate';
import Hours from '@/components/hours';
import Shift from '@/components/shift';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

/**
 * Renders a form component.
 *
 * @returns The JSX element representing the form.
 */
export default function Form(): React.JSX.Element {

    const router = useRouter();

    const formHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        router.push('/result', )
    }

    return (
        <form className='bg-gray-100 rounded-xl border-black border p-5' onSubmit={formHandler}>
            <div className='grid grid-cols-2 gap-5'>
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