//Layout importando
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

//importando pages (le ponemos AdminHome porque lo expotamos como default)
//Admin pages
import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/Signin';

//Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';

//Other pages
import Error404 from '../pages/Error404';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false, //no tiene que ser exacta para que carguen rutas hijas
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/login",
                exact: true,
                component: AdminSingIn
            },
            {                
                component: Error404
            }
        ]
    },
    {
        path:"/",
        component: LayoutBasic,
        exact:false,
        routes: [
            {
                path:"/",
                component: Home,
                exact: true
            },
            {
                path:"/contact",
                component: Contact,
                exact:true
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;  