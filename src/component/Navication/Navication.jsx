import "./Navigation.css";
import pic from "../../asserts/0f275b1c30123c908cc8491a86d9146a.png";
const Others = () => {
    return (
        <>
        <div className="left-side">
            <h3>Home</h3>    
            <h3>Course</h3>    
            <h3>Resources</h3>    
            <h3>My Batch</h3>    
            <h3>Sign Out</h3>    
        </div>
        </>
    )
}

const Navigation = () => {
    return(
        <>
        <div className="nav-container">
            <div> 
                <img src={pic} alt="LOGO" className="logo"/>
            </div>
            <Others />
        </div>
        </>
    )
}


export default Navigation;