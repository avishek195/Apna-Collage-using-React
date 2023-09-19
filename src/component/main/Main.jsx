import Poster from "../Poster/Poster";
import "./Main.css";
const details = [
    {
        name: "DELTA BATCH 2.0",
        des: "Lectus uploaded on alternate dayes @8PM.",
        complete: 91
    },
    {
        name: "ALPHA BATCH 4.0",
        des: "Welcome Alpha! Please find your curricum inside",
        complete: 80
    }
]

const Main = () => {
    return (
        <>
        <div className="main-wrapper">
            <h2 className="courses">COURSES</h2>
            <Poster details={details} />
        </div>
        </>
    )
}

export default Main;