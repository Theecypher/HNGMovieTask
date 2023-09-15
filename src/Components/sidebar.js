import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import SidebarBox from './SidebarBox';
import styled from 'styled-components';
import { FiLogOut, FiVideo } from "react-icons/fi";
import { MdOutlinePerson } from 'react-icons/md'

const SideBarStyle = styled.nav`
position: fixed;
left: 0;
top: 0;
border: 2px solid red;
padding: 5px 15px;
width: 165px;
height: 100vh;
border-radius: 0 10px 15px 0;


@media only screen and (max-width: 768px) {
    display: none;
}
a {
    color: black;
}
 .logout {
     margin: 25px 10px;
}
`



const Sidebar = () => {
    return ( 
        <SideBarStyle className="NavbarItems">
            <h1 className="logo">
                <FaBars style={{backgroundColor: "red",
                fontSize: "25px",
                borderRadius: '5px',
                color: "white",
                marginTop: "10px"
            }} className='logomenu' />
                MovieBox
            </h1>

            <ul className="nav__menu">
                <li>
                    <GoHome />
                    <Link className='nav-links' to="/">Home</Link>
                </li>
                <li>
                    <FiVideo />
                    <Link className='nav-links' to="/">Movies</Link>
                </li>
                <li>
                    <MdOutlinePerson />
                    <Link className='nav-links' to="/">Tv Series</Link>
                </li>
                <li>
                    <GoHome />
                    <Link className='nav-links' to="/">Upcoming</Link>
                </li>
            </ul>

            <SidebarBox />

            <p className='logout'>
             <Link>
                <FiLogOut />
                Log out
             </Link>
            </p>
        </SideBarStyle>
     );
}
 
export default Sidebar;