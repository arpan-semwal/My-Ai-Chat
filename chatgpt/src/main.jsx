import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from "./routes/homepage/homepage"
import { createRoot } from "react-dom/client";
import RootLayout from './layouts/rootLayout/rootLayout';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from './routes/dashboard/dashboard';
import ChatPage from './routes/chatPage/chatPage';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout';


 

const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/", element:<Homepage/>,
        
      },{
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<Dashboard/>
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage/>
          }
        ]
      }
    ]
  },
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
