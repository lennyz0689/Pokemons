//import './App.css'
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'
import Home from './views/Home/Home'
import Landing from './views/Landing/Landing'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </>
  )
}

export default App
