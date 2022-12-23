import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, BookList, About, Contact, Favorites, BookDetails, PageNotFound, SignIn } from './containers'
import { Navbar, Footer } from './components'
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
            <Route path='/book/:id' element={<BookDetails />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App

