import { notFound } from 'next/navigation';
import React from 'react';

function BlogPage({params}) {
    const {id}= params;

    if (Number(id) > 2) {
        notFound();
    }

    return (
        <div className='mt-6'>
            The Blog id is: {id}
        </div>
    );
}

export default BlogPage;