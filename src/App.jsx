import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Certificates from './Certificates/Certificates'
import News from './News/News'
import Products from './Products/Products'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/news' element={<News />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Layout>
  )
}

export default App