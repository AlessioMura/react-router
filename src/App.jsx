import { useEffect, useState } from 'react'
import './App.css'


const blogs = []
const initialBlogsList = {
  title: '',
  content: '',
  img: '',
}


function App() {

  const [blogsData, setBlogsData] = useState(initialBlogsList)
  const [blogsList, setBlogsList] = useState(blogs)
  const [blogListData, setBlogListData] = useState({})

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




  function addBlogTitle(e) {
    e.preventDefault()
    console.log(blogsData);

    const newBlog = {
      id: Date.now(),
      ...blogsData
    }

    setBlogsList([
      newBlog,
      ...blogsList
    ])

    setBlogsData(initialBlogsList)

  }

  function handleBlogData(e) {

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setBlogsData({
      ...blogsData,
      [e.target.name]: value
    })
  }




  return (
    <>
      <div className="container">
        <h1 className='py-4'>Blog posts</h1>

        <form onSubmit={addBlogTitle}>

          <div>
            <label htmlFor="blog" className="form-label">Submit your own blog!</label>

            <div>
              <div className='d-flex justify-content-between'>
                <div className="mb-3 col-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    name='title'
                    className="form-control"
                    id="title"
                    placeholder="Type the title"
                    aria-describedby="titlehelper"
                    value={blogsData.title}
                    onChange={handleBlogData}
                    required
                  />
                </div>
                <div className="mb-3 col-3">
                  <label htmlFor="img" className="form-label">Image</label>
                  <input
                    type="text"
                    name='img'
                    className="form-control"
                    id="img "
                    placeholder="Type the image path"
                    aria-describedby="imghelper"
                    value={blogsData.img}
                    onChange={handleBlogData}
                  />
                </div>
                <div className="mb-3 col-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select
                    className="form-select"
                    id='category'
                    aria-label="Default select example">
                    <option defaultValue=''>Choose the category</option>
                    <option id='1'>Lifestyle e Benessere</option>
                    <option id='2'>Tecnologia e Innovazione</option>
                    <option id='3'>Educazione e Cultura</option>
                  </select>
                </div>
              </div>

              <div className='d-flex justify-content-between my-4'>
                <div className="form-check col-2">
                  <input
                    className="form-check-input"
                    name='Lifestyle'
                    type="checkbox"
                    value={blogsData.tags}
                    onChange={handleBlogData}
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Lifestyle
                  </label>
                </div>
                <div className="form-check col-2">
                  <input
                    className="form-check-input"
                    name='SelfCare'
                    type="checkbox"
                    value={blogsData.tags}
                    onChange={handleBlogData}
                    id="flexCheck1"
                  />
                  <label className="form-check-label" htmlFor="flexCheck1">
                    SelfCare
                  </label>
                </div>
                <div className="form-check col-2">
                  <input
                    className="form-check-input"
                    name='TechTrends'
                    type="checkbox"
                    value={blogsData.tags}
                    onChange={handleBlogData}
                    id="flexCheck2"
                  />
                  <label className="form-check-label" htmlFor="flexCheck2">
                    TechTrends
                  </label>
                </div>
                <div className="form-check col-2">
                  <input
                    className="form-check-input"
                    name='DigitalNomad'
                    type="checkbox"
                    value={blogsData.tags}
                    onChange={handleBlogData}
                    id="flexCheck3"
                  />
                  <label className="form-check-label" htmlFor="flexCheck3">
                    DigitalNomad
                  </label>
                </div>
                <div className="form-check col-2">
                  <input
                    className="form-check-input"
                    name='Mindfulness'
                    type="checkbox"
                    value={blogsData.tags}
                    onChange={handleBlogData}
                    id="flexCheck4"
                  />
                  <label className="form-check-label" htmlFor="flexCheck4">
                    Mindfulness
                  </label>
                </div>
                <div className="form-check col-2">
                  <input
                    className="form-check-input"
                    name='CreativeLiving'
                    type="checkbox"
                    value={blogsData.tags}
                    onChange={handleBlogData}
                    id="flexCheck5"
                  />
                  <label className="form-check-label" htmlFor="flexCheck5">
                    CreativeLiving
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="content" className="form-label">Content</label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    name='content'
                    id="content"
                    placeholder="type the blog content"
                    value={blogsData.content}
                    onChange={handleBlogData}
                    required>
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-center'>
            <button className="btn btn-outline-secondary my-3" type="submit" id="button-addon2">Submit</button>
          </div>

        </form>

        <ul className='list-group'>
          {blogsList.map((blog) => (
            <li key={blog.id} className="list-group-item">
              <img src={blog.img} alt="" />
              <div>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            </li>
          ))}

        </ul>

        <hr />

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


      </div>
    </>

  )
}

export default App
