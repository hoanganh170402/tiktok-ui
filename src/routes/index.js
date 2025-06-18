import { Home, Following, Upload, Profile, Search } from '~/pages';
import configRoutes from '~/config/routes';

// layout
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: configRoutes.home, component: Home },
    { path: configRoutes.following, component: Following },
    { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
    { path: configRoutes.profile, component: Profile},
    { path: configRoutes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
