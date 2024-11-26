
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Form from './pages/Form'
import About from './pages/About'
import BlogList from './pages/BlogList'
import BlogPage from './pages/BlogPage.jsx'
import './App.css'
import DefaultLayout from './pages/DefaultLayout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/about' element={<About />} />
            <Route path='/bloglist' element={<BlogList />} />
            <Route path='/:id' element={<BlogPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App