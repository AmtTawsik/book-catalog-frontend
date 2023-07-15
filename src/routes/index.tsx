import {createBrowserRouter} from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import NotFound from '../page/NotFound';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default routes;