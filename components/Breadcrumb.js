import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link';

const Breadcrumb = () => {
 const router=useRouter()

 return (
  <div className="breadcrumb-area mb-5">
    <div className="container">
        <div className="breadcrumb-content">
            <h2 >{router.pathname.slice(1, 10)}</h2>
            <ul>
                <li>
                    <Link href='/'>
                    <a >Home</a>
                    </Link>
                    </li>
                <li className="active text-capitalize">{router.pathname.slice(1, 10)}</li>
            </ul>
        </div>
    </div>
</div>
 )
}

export default Breadcrumb
