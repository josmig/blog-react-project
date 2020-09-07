//Layout importando
import LayoutAdmin from '../layouts/LayoutAdmin';
//importando pages (le ponemos AdminHome porque lo expotamos como default)
import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/Signin';

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
                component: AdminSingIn,
                exact: true
            }
        ]
    }
];

export default routes;