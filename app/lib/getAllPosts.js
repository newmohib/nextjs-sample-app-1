  
export default async function getAllPosts(){
    const result = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
        // {
        //     // cache: "force-cache",
        //     // cache: "no-store",
        //     next:{
        //         revalidate: 100
        //     }
        // }
    )

    if (!result.ok) {
        throw new Error("There was an error fetching posts")
    }
    return result.json();
}

export async function getPost(id){

    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!result.ok) {
        throw new Error("There was an error fetching post")
    }
    return result.json();
}

export async function getPostComments(id){

    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    if (!result.ok) {
        throw new Error("There was an error fetching post comments")
    }
    return result.json();
}