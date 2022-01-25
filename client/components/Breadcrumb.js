import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link';

const Breadcrumb = () => {
 const router=useRouter()
 const path = router.pathname.slice(1, 10)

 return (
  <div className="breadcrumb-area mb-5">
    <div className="container">
        <div className="breadcrumb-content">
            <h2 >{path==='myaccount'? 'My Account': path}</h2>
            <ul>
                <li>
                    <Link href='/'>
                    <a >Home</a>
                    </Link>
                    </li>
                <li className="active text-capitalize">{path==='myaccount'? 'My Account': path}</li>
            </ul>
        </div>
    </div>
</div>
 )
}

export default Breadcrumb
