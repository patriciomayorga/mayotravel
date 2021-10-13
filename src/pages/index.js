import Link from 'next/link'
import { Button } from 'antd'

export default function HomePage () {
    return (
        <div>Hola
        <Button type="primary">Button</Button>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        </div>
    )
}