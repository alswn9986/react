import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Videos from './pages/Videos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, elemet: <Home />},
      {path: '/videos', elemet: <Videos />}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;