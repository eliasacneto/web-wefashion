
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Error404 from './views/Error404/Error404';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ClassForm from './Components/ClassForm/ClassForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />
  },
  {
    path: "/course/:id",
    element: <ClassForm />,
    errorElement: <Error404 />
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)