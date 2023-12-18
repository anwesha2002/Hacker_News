import {Card} from "react-bootstrap";
import {HNewsModel} from "../../Model/HNewsModel.ts";
import {HiOutlineClock, HiOutlineShare} from "react-icons/hi2";
import {HiOutlineHeart, HiOutlineStar, HiOutlineUser} from "react-icons/hi";
import {DateFormat} from "../../Util/TimeFormat.ts";
import {Link} from "react-router-dom";

export function News({story_id, title, author, created_at, points } :  HNewsModel){
    //const story_id = useParams()
    //console.log(story_id)

    return(
        <>
            {title &&
                <Card className=" h-50 m-2  border-0 border-bottom cursor-pointer">
                    <Link className="text-decoration-none  p-3" to={`/${story_id}`}>
                        <Card.Title className="text-secondary">
                            {title}
                        </Card.Title>
                        <Card.Body className="d-flex flex-row justify-content-between align-items-center text-muted">
                            <div className="d-flex flex-row">
                                <p className="me-5 d-flex align-items-center flex-row"><HiOutlineHeart className="me-2"/>{points} points</p>
                                <p className="me-5 d-flex align-items-center flex-row"><HiOutlineUser className="me-2"/>{author}</p>
                                <p className="me-5 d-flex align-items-center flex-row"><HiOutlineClock className="me-2"/>{DateFormat(created_at)}</p>
                            </div>
                            <div className="d-flex justify-content-end align-self-end right-0">
                                <HiOutlineShare className="me-3"/>
                                <HiOutlineStar/>
                            </div>
                        </Card.Body>
                    </Link>
                </Card>
            }
        </>
    )
}