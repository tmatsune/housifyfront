
import "./loginPage.css"
import { useContext, useState } from "react";
import { findOneProfile } from "../../services/profileService/profileIndex";
import { UserContext } from "../../context/currentUserCtx";
import { getImage, uploadImage } from "../../utils/firebase";
import { createProfile } from "../../services/profileService/profileIndex";
import { useNavigate } from "react-router";

import ICON from "../../imgs/icons/businessman.svg"
import ICON1 from "../../imgs/icons/house.svg"
import ScaleLoader from "react-spinners/ScaleLoader";

function LoginPage(){
    const [show, setShow] = useState(true)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')
    const {setCurrentUser, currentUser} = useContext(UserContext)
    const [image, setImage] = useState(ICON)
    const navigate = useNavigate()

    const login = async() => {
        const data = await findOneProfile(email, pass);
        console.log(data)
        if(data){   
            setCurrentUser(data)
            navigate("/houses/room")
        }else{
            alert("incorrect username or password")
        }
    }
    const check = () => {
        console.log(currentUser)
    }
    const toggle = () => {
        setShow(!show)
        if(show){
            setImage(ICON1)
        }else{
            setImage(ICON)
        }
    }
    return(
        <div id="loginpage">
            <div id="loginWrapper">
                <img alt='' id='logImg' src={image}></img>
                {
                    show ? (
                <div id="login">
                    <h4 className="ml-1 font-bold text-xl">Login</h4>
                    <hr></hr>
                    <div className="mt-2">
                        <h4 className="ml-1">Email</h4>
                        <input value={email} 
                        onChange={e => setEmail(e.target.value)} placeholder="email.."></input>
                    </div>
                    <div>
                        <h4 className="ml-1">Password</h4>
                        <input value={pass} 
                        onChange={e => setPass(e.target.value)} placeholder="password.." type="password"></input>
                    </div>
                    
                    <button onClick={login} id="loginBtn">login</button>
                    <p>Don't have an account? <p id="signUp" onClick={toggle}>Sign Up</p></p>
                </div> )
                : (
                    <Register toggle={toggle}></Register>
                )
                }

            </div>
        </div>
    )
}

type ToggleFunc = {
    toggle: () => void
}
function Register( {toggle}: ToggleFunc ){
    const {setCurrentUser} = useContext(UserContext)
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [bio, setBio] = useState('')
    const [imgUrl, setImgUrl] = useState(null);
    const [loading, setLoading] = useState(false)

    const imgageHandler = (e:any) => {
        setImgUrl(e.target.files[0])
    }   
    const createAccount = async() => {
        if(imgUrl !== null && email && pass && name){
            setLoading(true)
            await uploadImage(email, imgUrl);
            var sendImg = await getImage(email, imgUrl);
            const nwProfData = {
                name: name,
                email: email,
                password: pass,
                desc: bio,
                profImg: sendImg,
            }
            const data = await createProfile(nwProfData)
            setCurrentUser(data)
            setLoading(false)
        }else{
            alert("field wasnt entered")
        }

    }


    return (
        <div id="register">
            {
                loading ? (
                <ScaleLoader height={165} width={28} margin={8} color={"#ff5314"} id="load"></ScaleLoader>
                ) : (null)
            }
            <div>
                <span onClick={toggle} className="ml-2 text-blue-600 cursor-pointer">back</span>
                <h4 className="ml-1 font-bold text-xl">Regsiter</h4>
                <hr></hr>
            <div className="flex">
                <div id="reg0">
                    <div className="mt-2">
                        <h4 className="ml-1">Name</h4>
                        <input value={name} 
                        maxLength={40}
                        onChange={e => setName(e.target.value)} placeholder="name"></input>
                    </div>
                    <div className="mt-2">
                        <h4 className="ml-1">Email</h4>
                        <input value={email} 
                        maxLength={40}
                        onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                    </div>
                    <div className="mt-2">
                        <h4 className="ml-1">Password</h4>
                        <input value={pass} 
                        maxLength={40}
                        onChange={e => setPass(e.target.value)} placeholder="password" type='password'></input>
                    </div>
                </div>
                <div id="reg1" className="ml-24">
                    <div className="mt-2">
                        <h4 className="ml-1">Bio</h4>
                        <textarea id="txt"
                        value={bio} 
                        maxLength={100}
                        onChange={e => setBio(e.target.value)} placeholder="bio"></textarea>
                    </div>
                    <div className="mt-2">
                        <h4 className="ml-1">Bio</h4>
                        <input 
                        type="file"
                        className="w-11/12 pt-4 pb-4"
                        onChange={imgageHandler} placeholder="bio"></input>
                    </div>
                </div>
            </div>
            <button id="loginBtn" onClick={createAccount}>Regsiter</button>
            </div>
        </div>
    )
}
export default LoginPage;