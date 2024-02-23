'use client';

import { useSearchParams } from 'next/navigation';
import Data from '@/utility/data';
import React from 'react';

/**
 * Renders the page component for displaying payroll information.
 * @returns The JSX element representing the page.
 */
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

    /**
     * Retrieves the pay rate based on the state.
     * @returns The pay rate.
     */
    function getPayRate(): number {
        return Data.findPayrate(state.payRate.toString());
    }

    /**
     * Calculates the weekly rate based on the state.
     * @returns The weekly rate.
     */
    function calculateWeeklyRate(): number {
        return Data.calculatePayrate(state);
    }

    /**
     * Checks if overtime is applicable based on the hours worked.
     * @returns A string indicating if overtime is applicable.
     */
    function checkOvertime(): string {
        if (state.hoursWorked < 1) {
            return 'No data';
        }

        return state.hoursWorked > 42.4 ? 'True' : 'False';
    }

    return (
        <div className='bg-gray-100 rounded-xl border-black border p-5'>
            <div className='grid grid-cols-3 gap-5'>
                <div>
                    <div>
                        <h1>Name</h1>
                        <p>{state.name}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Last Name</h1> 
                        <p>{state.lastName}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Social Security</h1>
                        <p>{state.ssn}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Shift</h1>
                        <p>{state.shift}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Hourly rate</h1>
                        <p>${getPayRate()}/hr</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Hours Worked</h1>
                        <p>{state.hoursWorked}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Weekly Rate</h1>
                        <p>${calculateWeeklyRate()}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Overtime</h1>
                        <p>{checkOvertime()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}