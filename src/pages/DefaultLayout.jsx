import { Outlet } from "react-router";
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

export default function DefaultLayout() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}