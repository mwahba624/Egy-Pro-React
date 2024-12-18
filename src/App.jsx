
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: '', element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;