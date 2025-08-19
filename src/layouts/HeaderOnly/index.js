import Header from '~/layouts/components/Header';
import Sidebar from '../components/Sidebar';
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="container">{children}</div>
        </div>
    );
}

export default HeaderOnly;
