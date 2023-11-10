//import './App.css'
import NavBar from './components/navBar/NavBar'
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'
import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'

import { Route, Routes, useLocation } from 'react-router-dom'

function App() {

  const { pathname } = useLocation()

  console.log(pathname);

  return (
    <>
      {(pathname !== '/') && <NavBar />}
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </>
  )
}

export default App
