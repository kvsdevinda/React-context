import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Singup from './Pages/Singup';
import store from './Store/Store';
import { Provider } from 'react-redux';
import Login from './Components/Login';

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
      },

      {
        path: "Login", 
        element: <Login/>,
      }
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} > </RouterProvider>
  </Provider>
);

reportWebVitals();
