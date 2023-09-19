import Percentage from "../percentage/Percentage";
import "./Poster.css";
import delta from "../../asserts/delta (10)_m0cxistavi3utl.jpeg";
 import alpha from "../../asserts/maxresdefault.jpg";
const Poster = ({details}) => {
    const pic = [delta, alpha];
    return(
        <>
        <div className="poster-container">
            {
                details.map(({name, des, complete},id) => {
                    return (
                        <div key={id} className="Poster">
                            <div className="img">
                                <img src={pic[id]} alt="Poster" className="delta" />
                            </div>
                        <div className="details">
                         <div className="batch">{name}</div>
                        <div>{des}</div>
                        <Percentage per={complete}/>
                        <button>Continue</button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Poster;