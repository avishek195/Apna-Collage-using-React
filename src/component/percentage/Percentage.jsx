import "./Percentage.css";

const Percentage = ({per}) => {
    return(
        <>
        <div className="p-container">
        <div style={{fontSize: "20px", fontWeight: "900"}}>{`${per}% COMPLETE`}</div>
        <div className="p-show" style={{width: `${per}%`}}></div>
        </div>
        </>
    )
}
export default Percentage;