import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className="container">
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/news'>News</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/login'>Login</Link>
            </nav>
            <main>
                Homieee
            </main>
        </div>
    </div>
  )
}

export default Home