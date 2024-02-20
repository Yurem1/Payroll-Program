'use client';

import React from 'react';

export default function Page(props: any): React.JSX.Element {
    console.log(props.lastName);
    
    return (
        <form className='bg-gray-100 rounded-xl border-black border p-5'>
            <p>
                hi
            </p>
        </form>
    );
}