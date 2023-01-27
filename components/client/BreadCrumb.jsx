import { Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react"
import Link from "next/link"

// const dataRoot = { main: 'Carta', root: [{ url: '/home', title: 'Inicio' }] } //*Example

export const BreadCrumb = ({ dataRoot = null }) => {
    const dataRooValid = dataRoot !== null

    return (
        <>
            {dataRooValid &&
                <Breadcrumb>
                    {dataRoot.root.map((root) => {
                        return (
                            <BreadcrumbItem key={root.url + Math.random(1, 100)}>
                                <Link href={root.url}>{root.title}</Link>
                            </BreadcrumbItem>
                        )
                    })}
                    <BreadcrumbItem isCurrentPage fontWeight='semibold'>
                        <Text>{dataRoot.main}</Text>
                    </BreadcrumbItem>
                </Breadcrumb>
            }


        </>
    )
}
