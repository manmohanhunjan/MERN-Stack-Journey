import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
import Navbar from './components/Navbar'
import React, { Suspense } from 'react'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={"...loading"}><Dashboard/></Suspense>} />
        <Route path='/' element={<Suspense fallback={"...loading"}><Landing/></Suspense>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
