import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './utils/routes'


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
