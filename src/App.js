import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import CreateProfile from './pages/CreateProfile'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/create-profile' element={<CreateProfile />} />
        <Route path='*' element={<h2> Page not found 😭 </h2>} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )
}

export default App