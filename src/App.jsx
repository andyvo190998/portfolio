import React from 'react'
import Intro from './components/introduction/Intro'
import About from './components/about/About'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { useSelector } from 'react-redux'


const App = () => {
  const mode = useSelector((item) => item.darkMode);

  console.log(mode);
  return (
      <div style={{backgroundColor: mode ? "#222" : 'white', color: mode && "white"}}>
        <Intro />
        <About />
        <ProductList />
        <Contact />
        <Toggle />
      </div>
  )
}

export default App
