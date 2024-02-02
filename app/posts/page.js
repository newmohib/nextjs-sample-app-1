import React from 'react';
import getAllPosts from '@/app/lib/getAllPosts';
import Link from 'next/link';

async function Posts() {
    const posts = await getAllPosts();
    console.log(posts);
    
    return (
        <div className='mt-6'>
            <h1>All Posts</h1>
            <ul className='mt-3'>
                {posts.map(post=><li key={post.id} >
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>)}
            </ul>
        </div>
        
    );
}

export default Posts;