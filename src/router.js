import {createRouter, createWebHistory} from 'vue-router';
import Tech from './components/pages/Tech';
import Calendar from './components/pages/Calendar';
import Home from './components/pages/Home';
import Markdown from './components/pages/Markdown';
import Slider from './components/pages/Slider';
import Calculator from './components/pages/Calculator';
import ReUseAbleModal from './components/pages/ReUseAbleModal';
import Chat from './components/pages/Chat';
import UserCrud from './components/pages/UserCrud';

const routes = [
    { path: '/', component: Home },
    { path: '/tech', component: Tech },
    { path: '/calender', component: Calendar },
    { path: '/markdown', component: Markdown },
    { path: '/slider', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/modal', component: ReUseAbleModal },
    { path: '/chat', component: Chat },
    { path: '/user-crud', component: UserCrud },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router