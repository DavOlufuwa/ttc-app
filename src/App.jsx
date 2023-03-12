import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home'
import './App.scss'
import { Route, createBrowserRouter, createRoutesFromElements, Routes, RouterProvider } from 'react-router-dom'
import Error from './components/Error'


const router = createBrowserRouter(createRoutesFromElements(
    <Route 
      path='/' 
      element={<Home/>} 
      errorElement={<Error/>}
    />
))

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
