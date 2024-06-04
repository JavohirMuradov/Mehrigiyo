import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import icon from "../public/favicon-32x32.png";
import Auth from './utils/Registration';

const Home = lazy(() => import('./Pages/Home/Home'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Certificates = lazy(() => import('./Pages/Certificates/Certificates'));
const News = lazy(() => import('./Pages/News/News'));
const Products = lazy(() => import('./Pages/Products/Products'));
const Tv = lazy(() => import('./Pages/News/News/Tv'));
const Xait = lazy(() => import('./Pages/News/News/Xait'));
const June = lazy(() => import('./Pages/News/News/June'));

const App = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='w-screen h-screen flex flex-row items-center justify-center'>
            <img src={icon} alt="Loading..." className="animate-rotate" />
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/news' element={<News />} />
          <Route path='/products' element={<Products />} />
          <Route path='/news/broadcast' element={<Tv />} />
          <Route path='/news/xait' element={<Xait />} />
          <Route path='/news/1-june' element={<June />} />
          <Route path='/register' element={<Auth />} />
          <Route path='/login' element={<Auth type={"login"} />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
