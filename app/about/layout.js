import React from 'react';
import Link from 'next/link';


const AbboutLayout = ({ children }) => {
    return (
        <div>
            <nav className='mt-6 mb-6'>
                <ul className="flex gap-6">
                    <li><Link href="/about/mission">mission</Link></li>
                    <li><Link href="/about/vission">Vission</Link></li>
                </ul>
            </nav>
            {children}
        </div>
    );
};


export default AbboutLayout;

