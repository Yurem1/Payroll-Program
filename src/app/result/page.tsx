'use client';

import { useSearchParams } from 'next/navigation';
import Data from '@/utility/data';
import React from 'react';

export default function Page(): React.JSX.Element {
    const search = useSearchParams()

    const [state, setState] = React.useState(Data.DEFAULT_DATA);

    React.useEffect(() => {
        search.forEach((value, key) => {
            setState((prev) => ({
                ...prev,
                [key]: value
            }));
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function displayResults(): React.JSX.Element[] {

        return Object.entries(state).map(([key, value], index,) => {
            return (
                <div key={index} className='rounded'>
                    <h1>{key.toLocaleUpperCase()}</h1>
                    <p>{value}</p>
                </div>
            );
        });
    }

    const returnPayrate = (): number => {
        return Data.findPayrate(
            state.payRate.toString()
        );
    }

    const returnWeeklyRate = (): number => {
        return Data.calculatePayrate(state);
    }

    return (
        <div className='bg-gray-100 rounded-xl border-black border p-5'>
            <div className='grid grid-cols-3 gap-5'>
                <>
                    {displayResults()}
                </>
                <div>
                    <h1>SALARY</h1>
                    <p>{`$${returnPayrate()}/hr`}</p>
                </div>
                <div>
                    <h1>WEEKLY PAY</h1>
                    <p>{returnWeeklyRate()}</p>
                </div>
            </div>
        </div>
    );
}