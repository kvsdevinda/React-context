import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home';
import Singup from './Pages/Singup';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    
    children: [
      {
        path: "signup",  
        element: <Singup />,
      },
      {
        path: "home", 
        element: <Home />,
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

reportWebVitals();
