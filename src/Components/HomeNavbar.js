import { Link } from 'react-router-dom'
// import {  } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
// import {  } from 'react-icons/fa'
// import {  } from 'react-icons/li'
// import { Styled } from 'styled-components/dist/constructors/constructWithOptions';
import { styled } from 'styled-components';
import search from '../images/Search.svg'
import { useEffect, useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import box from "../images/logo.png"

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  // background: #eee;
  // width: 100%;
  // minheight: 6v;
  boxSizing: border-box;
  alignItems: center;
  position: sticky;
  .logo_text  {
    color: #fff;
    padding: 10px;
    margin-top: 20px;
  }
  .search {
    outline: none;
    border: 2px solid #fff;
    background-color: transparent;
    width: 50%;
    color: white;
    padding: 5px 5px 5px 15px;
  }
  .signup {
    margin: auto;
    font-size: .8rem;
    color: #fff; 
  }
  .logo img {
    width: 20px;
  }
  .hammenu {
    color: white;
    font-size: 6px;
    width: 20px;
    height: 15px;
    border-radius: 10px;
  }
`

const HomeNavbar = () => {


    return ( 
        <Navbar className="homenav">
            <h3 className='logo'>
                <img src={box} alt="" />
                <Link className='logo_text'>MovieBox</Link>
            </h3>

            <input className='search' type="text" placeholder="What do you want to watch?" />

            <div className="menu-icons">
            {/* <h5> */}
                <Link className='signup'>Sign up</Link>
            {/* </h5> */}

              <FaGripLines style={{backgroundColor: "red"}}  className='hammenu'/>
            </div>
        </Navbar>
     );
}
 
export default HomeNavbar;