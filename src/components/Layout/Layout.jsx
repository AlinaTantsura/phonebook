import Header from "components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
        </div>
    )
};
export default Layout;