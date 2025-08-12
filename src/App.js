import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Routes
import { publicRoutes } from '~/routes';

// Layout
import { DefaultLayout } from '~/layouts';

import { AudioProvider } from '~/context/AudioContext';

import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <div className="App">
            <AudioProvider>
                <Router>
                    <Routes>
                        {publicRoutes.map((route, item) => {
                            const Page = route.component;

                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={item}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </Router>
            </AudioProvider>
            <ToastContainer limit={1} />
        </div>
    );
}

export default App;
