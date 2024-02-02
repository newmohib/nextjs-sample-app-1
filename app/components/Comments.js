import React from 'react';

async function PostComments({commentsPromise}) {
    const comments = await commentsPromise

    return (
        <div className='mt-10' > 
                <h1>Comments</h1>

                <ul className='mt-5'>
                    {comments.map(comment=> <li className='mb-2 border p-1' key={comment.id}>{comment.body}</li>)}
                </ul>
            </div>
    );
}

export default PostComments;