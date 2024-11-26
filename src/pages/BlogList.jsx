import { useEffect, useState } from 'react'

export default function BlogList() {
    const [blogListData, setBlogListData] = useState([])

    function handleClick(e) {
        fetchData()
    }

    function fetchData(url = 'http://127.0.0.1:3000/posts') {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setBlogListData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container">
                <div>
                    <h3>Click here to show all blogs</h3>
                    <button type='button' onClick={handleClick}>Here!</button>
                </div>


                <ul>
                    {blogListData.results ? blogListData.results.map(blog => (
                        <li key={blog.id}>
                            <img src={blog.image} alt="" />
                            <div>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                            </div>
                        </li>
                    )) :
                        <p>No blogs yet</p>
                    }

                </ul>
            </div >
        </>
    )
}