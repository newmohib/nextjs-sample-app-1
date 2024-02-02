import PostComments from '@/app/components/Comments';
import getAllPosts, { getPost, getPostComments } from '@/app/lib/getAllPosts';
import React, { Suspense } from 'react';

export async function generateMetadata({params}){
    const {id} = params;
    const post = await getPost(id);
    
    return  {
        title: post.title,
        description: post.body,
      }
}


async function PostPage({params}) {
    const {id} = params;
    const postPromise =  getPost(id);
    const commentsPromise =  getPostComments(id);
    // const [post, comments] = await Promise.all([postPromise, commentsPromise])
    const post = await postPromise;

    return (
        <div className='mt-6'>
            <h2 className='text-blue-500'> {post.title}</h2>
            <p className='my-3'>{post.body}</p>
            <hr/>
            
            <Suspense fallback="Loading Comments...">
                <PostComments commentsPromise={commentsPromise} />
            </Suspense>
        </div>
    );
};

// Return a list of `params` to populate the [id] dynamic segment

export async function generateStaticParams() {
    const posts = await getAllPosts();
    console.log("test", posts)
   // Must need to string due to 
    return posts.map((post) => ({
      id: post.id.toString(),
    }))
  } 

export default PostPage;