import React, { useEffect, useState } from 'react';
import './Frontpage.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io';


const Frontpage = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);

    const token = localStorage.getItem("token")


    // useEffect(() => {
  
    //     if (location.pathname === '/dashboard') {
    //         setLogin(true)
    //     }
    // })

    useEffect(() => {
        if (token) {
          setLogin(false)
        }
    
      })
    

    useEffect(() => {
        if (login) {
            setLogin(false)
            navigate("/home")
        }
    }, [])

    

    const userlogout = () => {
        localStorage.clear("token")
        
        setLogin(true)
        navigate("/home")
        // alert("log out")
    }

    return (
        <>
            <div >
                <nav className="nav">
                    <ul>
                        <li><h1>SELLSHOP</h1></li>&nbsp;
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/page">Page</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact </Link></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoMdCart /> <br />2 items $44.00</li>

                        { !login ? (<button onClick={userlogout}>Log out</button>) : (<button><Link className='loginbtn' to="/Login">Log in</Link></button>)}
                    </ul>

                </nav>
            </div>

        </>
    )
}

export default Frontpage










