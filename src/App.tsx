import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogRoutes from './pages/routes'

function App() {

  return (
    <>
      <BrowserRouter basename={'/blog'}>
        <Routes>
          <Route index element={<BlogRoutes />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
