import "./profilepage.css"
import { UserContext } from "../../context/currentUserCtx";
import { useContext, useEffect } from "react";


function ProfilePage() {
    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        
    }, [])

    return (
        <div>   
            <div>
                <div id="userDetails">

                </div>
                <div id="listingDetails">

                </div>
            </div>
        </div>
    )
}
export default ProfilePage;