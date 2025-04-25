
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NavBar from './components/navBar'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import PageNotFound from './components/PageNotFound'
import NewProduct from './components/newProduct'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}>
          <Route path='product' element={<Product />} />
          <Route path='newProduct' element={<NewProduct/>}/>
        </Route>
        <Route path='/Register' element={<Signup/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>

    </>
  )
}

export default App
