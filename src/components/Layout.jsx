import { Flex } from "@chakra-ui/react";
import Header from "components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={null}>
                <Flex as="main" direction="column" align="center">
                    <Outlet />
                </Flex>
            </Suspense>
        </div>
    )
};
export default Layout;