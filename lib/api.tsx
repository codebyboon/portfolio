type Post = {
    email: string
    subject: string
    message: string
}

let posts: Post[] = [];

export const sendEmail = async (post: Post) => {
    await posts.push(post);
}