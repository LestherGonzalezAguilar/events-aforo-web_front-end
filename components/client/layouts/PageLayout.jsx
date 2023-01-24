import Head from "next/head"
import { NavBar } from "."

export const PageLayout = ({ children, title = 'Aforify' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar />
            {children}
        </>
    )
}