import {Card, Col, Row} from "react-bootstrap";
import {HNewsModel} from "../../Model/HNewsModel.ts";
import {HiOutlineClock, HiOutlineShare} from "react-icons/hi2";
import {HiOutlineHeart, HiOutlineStar, HiOutlineUser} from "react-icons/hi";
import {DateFormat} from "../../Util/TimeFormat.ts";
import {Link} from "react-router-dom";
import {Truncate} from "../../Util/Truncate.tsx";
import '../../Style/News.css'

export function News({story_id, title, author, created_at, points, story_text } :  HNewsModel){
    //const story_id = useParams()
    //console.log(story_id)

    return(
        <>
            {title &&
                <Card title="Click to see" className=" h-50 m-2 news  border-0 border-bottom cursor-pointer">
                    <Link className="text-decoration-none  p-3" to={`/${story_id}`}>
                        <Card.Title className="text-dark">
                            {title}
                        </Card.Title>
                        {story_text &&
                            <Card.Body className="text-muted">
                                <p dangerouslySetInnerHTML={{__html: Truncate(story_text)}}/>
                            </Card.Body>
                        }
                        <Card.Body className="d-flex flex-row justify-content-between align-items-center text-muted">
                            <Row className="d-flex w-75  flex-row ">
                                <Col><p className="me-5 w-100  d-flex align-items-center flex-row"><HiOutlineHeart className="me-2"/>{points} points</p></Col>
                                <Col><p className="me-5 w-100  d-flex align-items-center flex-row"><HiOutlineUser className="me-2"/>{author}</p></Col>
                                <Col><p className="me-5 w-100  d-flex align-items-center flex-row"><HiOutlineClock className="me-2"/>{DateFormat(created_at)}</p></Col>
                            </Row>
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