import {
    FaComment,
    FaFire,
    FaLightbulb,
    FaMicrophoneAlt,
    FaNewspaper, FaStar,
} from "react-icons/fa";
import '../../Style/SideBar.css'
export function SideBar(){
    return(
        <div className="w-25 text-muted border-end bg-body-tertiary sidebar">
            <div className="mt-3 d-flex items align-items-center p-2 bg-body-secondary">
                <p className="ms-4 "><FaNewspaper className="me-4"/>All</p>
            </div>
            <div className="mt-3 p-2 items d-flex align-items-center">
                <p className="ms-4"><FaFire className="me-4"/>Hot</p>
            </div>
            <div className="mt-3 p-2 items d-flex align-items-center">
                <p className="ms-4"><FaMicrophoneAlt className="me-4"/>Show HN</p>
            </div>
            <div className="mt-3 p-2 items d-flex align-items-center">
                <p className="ms-4"><FaComment className="me-4"/>Ask HN</p>
            </div>
            <div className="mt-3 p-2 items d-flex align-items-center">
                <p className="ms-4"><FaLightbulb className="me-4"/>Poll</p>
            </div>
            <div className="mt-4 p-2 items d-flex align-items-center">
                <p className="ms-4"><FaStar className="me-4"/>Starred</p>
            </div>
        </div>

    )
}