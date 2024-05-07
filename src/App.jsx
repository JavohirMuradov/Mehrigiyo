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
        <Route path='/' elemen={<Home />} />
        <Route path='/' elemen={<Contact />} />
        <Route path='/' elemen={<Certificates />} />
        <Route path='/' elemen={<News />} />
        <Route path='/' elemen={<Products />} />
      </Routes>
    </Layout>
  )
}

export default App