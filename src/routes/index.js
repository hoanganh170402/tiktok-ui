import { Home, Following, Upload, Profile } from '~/pages';

// layout
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: null },
    { path: '/:nickname', component: Profile, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
