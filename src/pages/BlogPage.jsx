import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function BlogPage() {

    const [post, setPost] = useState(null)

    const { id } = useParams()
    const url = `http://localhost:3000/posts/${id}`

    useEffect(
        () => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPost(data.data)
                
            })
            .catch(err => {
                console.log(err);
                
            })
        
        },
        [])


    return (
        <>
            <h1>Blog id: {id}</h1>
            {
                post ? (
                    <div>
                        <h3>{post.title}</h3>
                        <img src={`http://localhost:3000/posts/${post.image}`} alt="" />
                        <p>{post.content}</p>
                    </div>
                ) : (
                    <div>loading...</div>
                )
            }
        </>
    )

}