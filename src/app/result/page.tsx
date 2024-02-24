import Data, { IForm } from '@/utility/data';
import React from 'react';

/**
 * Renders the result page with the provided search parameters.
 * @param searchParams - The search parameters.
 * @returns A Promise that resolves to the JSX element representing the result page.
 */
export default function Page({ searchParams } : {searchParams: IForm}): React.JSX.Element {
    
    const { 
        name, 
        lastName, 
        ssn, 
        shift, 
        payRate, 
        hoursWorked
    } = searchParams;
    
    /**
     * Retrieves the pay rate based on the state.
     * @returns The pay rate.
     */
    function getPayRate(): number {
        return Data.findPayrate(`${payRate}`);
    }

    /**
     * Calculates the weekly rate based on the state.
     * @returns The weekly rate.
     */
    function calculateWeeklyRate(): number {
        return Data.calculatePayrate({
            payrate: payRate,
            hours: hoursWorked,
        });
    }

    /**
     * Checks if overtime is applicable based on the hours worked.
     * @returns A string indicating if overtime is applicable.
     */
    function checkOvertime(): string {
        return hoursWorked > 42.4 ? 'True' : 'False';
    }

    return (
        <div className='bg-gray-100 rounded-xl border-black border p-5'>
            <div className='grid grid-cols-3 gap-5'>
                <div>
                    <div>
                        <h1>Name</h1>
                        <p>{name}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Last Name</h1>
                        <p>{lastName}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Social Security</h1>
                        <p>{ssn}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Shift</h1>
                        <p>{shift}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Hours Worked</h1>
                        <p>{hoursWorked}</p>
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