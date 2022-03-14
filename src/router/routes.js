import store from '@/store'
import { defineAsyncComponent } from 'vue'
const loadView = (view) => () =>
    import(`../views/${view}.vue`).then(m => m.default || m);

const routes = [{
    component: loadView('Home/Index'),
    path: '/',
    name: 'home'
},
{
    component: loadView('About/Index'),
    path: '/about',
    name: 'about'
},
{
    component: loadView('Projects/Index'),
    path: '/projects',
    name: 'projects'
},
{
    component: loadView('Skill/Index'),
    path: '/skill',
    name: 'skill'
},
{
    component: loadView('Contact/Index'),
    path: '/contact',
    name: 'contact'
},
// {
//     component: loadView('SubDriverPartner/Index'),
//     path: '/users',
//     children: [
//         {
//             component: loadView('SubDriverPartner/Listing'),
//             path: '',
//             name: 'list-user',
//         },
//         {
//             component: loadView('SubDriverPartner/FormUser'),
//             path: '/create-user',
//             name: 'create-user',
//         },
//         {
//             component: loadView('SubDriverPartner/FormUser'),
//             path: '/edit-user/:id',
//             name: 'edit-user',
//         },
//         {
//             component: loadView('SubDriverPartner/ViewUser'),
//             path: '/view-user',
//             name: 'view-user',
//         },
//     ]
// }, 
]

export default routes;