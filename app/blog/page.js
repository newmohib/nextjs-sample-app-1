import Link from 'next/link';
import React from 'react';

export default function Blogs(){
    const blogs = [
        {id: 1, title: "Blog 1", description: "Blog 1 description"},
        {id: 2, title: "Blog 2", description: "Blog 2 description"},
        {id: 3, title: "Blog 3", description: "Blog 3 description"},
    ] 
    return (
        <main className="mt-10">

            <ul>
                {
                    blogs.map((blog)=>(<Link href={`/blog/${blog.id}`} key={blog.id}><li className='mb-2' key={blog.id}>{blog.title}</li></Link>))
                }
            </ul>
        </main>
    )
}