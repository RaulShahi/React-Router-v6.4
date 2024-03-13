import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './routes/RootLayout'
import NewPost, { postSubmitAction } from './routes/NewPost'
import PostDetails, { postDetailLoader } from './routes/PostDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: postSubmitAction,
          },
          { path: "/:id", element: <PostDetails />, loader: postDetailLoader }, //use '/' in the path for absolute, remove for relative
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
