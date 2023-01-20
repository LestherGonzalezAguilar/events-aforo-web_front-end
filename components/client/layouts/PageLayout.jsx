import Head from "next/head"

export const PageLayout = ({ children, title = 'Aforify' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}