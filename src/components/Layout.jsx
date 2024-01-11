import Header from "components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    )
};
export default Layout;