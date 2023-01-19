import Image from "next/image"
import Link from "next/link"
import imageLogo from '../../assets/logooriginal.svg'
export const Logo = () => {
    return (
        <Link href='/'>
            <Image
                src={imageLogo}
                alt="Logo Aforify"
                height='30'
            />
        </Link>
    )
}
