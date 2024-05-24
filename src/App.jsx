import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Certificates from './Pages/Certificates/Certificates'
import News from './Pages/News/News'
import Products from './Pages/Products/Products'

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