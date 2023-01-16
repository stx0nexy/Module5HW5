// pages
import User from "./pages/Users/User";

// other
import {FC} from "react";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Resources from "./pages/Resources";
import Resource from "./pages/Resources/Resource";
import CreateUser from "./pages/CreateUser/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import Registration from "./pages/Registration";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'users-route',
        title: 'Users',
        path: '/',
        enabled: true,
        component: Users
    },
    {
        key: 'resources-route',
        title: 'Resources',
        path: '/resources',
        enabled: true,
        component: Resources
    },
    {
        key: 'create-user-route',
        title: 'Create',
        path: '/user/created',
        enabled: true,
        component: CreateUser
    },
    {
        key: 'update-user-route',
        title: 'Update',
        path: '/user/update',
        enabled: true,
        component: UpdateUser
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/resource/:id',
        enabled: false,
        component: Resource
    },
    {
        key: 'login-route',
        title: 'Login',
        path: '/login',
        enabled: false,
        component: Login
    },
    {
        key: 'registration-route',
        title: 'Registration',
        path: '/registration',
        enabled: false,
        component: Registration
    }
]