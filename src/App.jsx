import React from 'react'
import Intro from './components/introduction/Intro'
import About from './components/about/About'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { useSelector } from 'react-redux'
import Nav from './components/navbar/Nav'


const App = () => {
  const mode = useSelector((item) => item.darkMode);

  console.log(mode);
  return (
      <div style={{backgroundColor: mode ? "#222" : 'white', color: mode && "white"}}>
        {/* <Nav /> */}
        <Intro />
        <About />
        <ProductList />
        <Contact />
        <Toggle />
      </div>
  )
}

export default App
