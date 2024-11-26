import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
    return (
        <Link href="/" className="block w-16">
            <Image
                src="/images/logo.svg"
                alt="BlackAt Logo"
                width={64}
                height={32}
                className="h-8 w-auto"
                priority
            />
        </Link>
    )
}