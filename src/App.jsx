import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home,SignUp, BookList, About, Contact, Favorites, BookDetails, PageNotFound, SignIn, Shopping } from './containers'
import { Navbar, Footer, ScrollTop } from './components'
import { images } from './constants'

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  return (
    <div className='app'>
      {loading ? (
        <div className="app__loader-container">
          <img src={images.loader} alt="banner" />
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/book' element={<BookList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/shopping' element={<Shopping />} />
            <Route path='/books/:id' element={<BookDetails />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <ScrollTop />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App

