
import "./footerPage.css"
import { Link } from "react-router-dom"

function FooterPage(){

    return(  //255, 81, 18
        <div id="footerMain" style={{backgroundColor: `rgb(${255}, ${81}, ${18})`}}>
            <div id="links">
                <Link to="https://www.instagram.com/terencematsune/"><img alt='' src={'https://cdn-icons-png.flaticon.com/512/87/87390.png'}></img></Link>
                <Link to="https://github.com/tmatsune?tab=repositories"><img alt='' src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}></img></Link>
                <Link to="https://www.linkedin.com/in/terence-matsune-bb4957195/"><img alt='' src={'https://cdn-icons-png.flaticon.com/512/1384/1384014.png'}></img></Link>
            </div>
            <div id="footerDiv">
                <ul>
                    <li>Creator: Terence Matsune</li>
                    <li>Contect: 626-257-4640</li>
                </ul>
                <ul>
                    <li>Created With:</li>
                    <li>React TS</li>
                </ul>
                <ul>
                    <li>Support:</li>
                    <li>help</li>
                </ul>
            </div>
        </div>
    )
}
export default FooterPage