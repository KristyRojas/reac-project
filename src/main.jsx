import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import RickAndMortyApp from './RickAndMortyApp.jsx'
import Error from './components/Error.jsx'
import {createHashRouter, RouterProvider} from "react-router-dom"


const router=createHashRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/character",
    element:<RickAndMortyApp/>
  },
  {
    path:"/*",
    element:<Error/>
  },
]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
