import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home'
import './App.scss'
import { Route, createBrowserRouter, createRoutesFromElements, Routes, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home/>}/>
))

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
