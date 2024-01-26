import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { HomePage } from './pages/HomePage/HomePage'
import { JogadoresPage } from './pages/JogadoresPage/JogadoresPage'
import { SobrePage } from './pages/SobrePage/SobrePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "jogadores",
    element: <JogadoresPage />
  },{
    path: "sobre",
    element: <SobrePage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
