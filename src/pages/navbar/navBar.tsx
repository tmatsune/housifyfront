import "./navBar.css"
import { Outlet } from "react-router-dom";
import { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import HOUSE from "../../imgs/house.svg"
import FooterPage from "../footerpage/footerPage";
import { UserContext } from "../../context/currentUserCtx";

function NavBar(){
    const [show, setShow] = useState(false)

    const {currentUser, setCurrentUser} = useContext(UserContext)

    function changeTheme(){
        if(show){
            document.documentElement.style.setProperty('--navheight',"-60%");
            setShow(false)
        }else{
            document.documentElement.style.setProperty('--navheight',"0%");
            
            setShow(true)
        }
    }
    const logout = () => {
        setCurrentUser(null)
    }   
    return (
        <Fragment>
            <div id="burger" onClick={changeTheme}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <header className="text-white font-extrabold " id="nav">
                <div className="absolute flex top-1 left-8 md:top-3">
                    <img alt="" className="h-8 md:h-10" src={HOUSE}></img>
                    <h1 id="logo" className="py-2">HOUSIFY</h1>
                </div>
                <ul className="" id="navul">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/houses/room"><li>houses</li></Link>
                    <Link to="/listing" className=""><li>Create Listing</li></Link>
                    {
                        currentUser ? (<Link to="/login"><li onClick={logout}>logout</li></Link>) 
                        : (<Link to="/login"><li>login</li></Link>)
                    }
                    {
                        currentUser ? (<img alt='' id="profileImage" src={`${currentUser.profImg}`}></img>) : (null) 
                    }
                </ul>
            </header>
            <Outlet></Outlet>
            <Fragment>
                <FooterPage></FooterPage>
            </Fragment>
        </Fragment>
    )
}
export default NavBar;