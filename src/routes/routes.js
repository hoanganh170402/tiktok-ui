import { Home, Following, Upload, Profile, Search, Live, Explore } from '~/pages';
import config from '~/config';

// layout
import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Home },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
    { path: config.routes.explore, component: Explore },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
