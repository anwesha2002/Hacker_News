import {Card, Spinner} from "react-bootstrap";
import {UseDataDetail} from "../Context/NewsDetailProvider.tsx";
import {Comments} from "../Component/Comments.tsx";
import {DateFormat} from "../../Util/TimeFormat.ts";
import {UseData} from "../Context/DataProvider.tsx";
import {FaArrowAltCircleUp} from "react-icons/fa";

export function PostDetail(){
   const { detail, loading, error,showComments, LoadMore } = UseDataDetail()
    const { news } = UseData()
    if(loading) return <div className="d-flex justify-content-center mt-5 align-items-center text-muted">
        <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
    </div>
    if(error) return <h2 className="d-flex justify-content-center align-items-center">Error</h2>
    console.log(showComments)




     return(
        <>
            {!loading &&
                <Card className="m-5 p-2 border-0">
                    <a href="#">
                        <div title="Top" className="bottom-0 mb-4 end-0 me-3 position-fixed"><FaArrowAltCircleUp className="text-body-tertiary" style={{fontSize : "40px"}}/></div>
                    </a>
                    <Card.Title className="border-bottom pb-4 ">
                        SHOW HN : {detail?.title}
                    </Card.Title>
                    {news.map(news=>(
                        news.story_id === detail?.story_id && news.story_text? <h6 className="text-secondary-emphasis" dangerouslySetInnerHTML={{__html: news?.story_text}}/> : null
                    ))}
                    <Card.Body>
                        <div className="d-flex flex-row text-muted ">
                         {detail?.points} points
                         <p className="ms-4">{DateFormat(detail?.created_at)}</p>
                        </div>
                        <div className="mt-4" >
                            {showComments.map(comment=>(
                                <div className="mt-3">
                                    <Comments key={comment.id} {...comment}/>
                                </div>
                            ))}
                        </div>
                    <div className="btn btn-sm btn-warning  mt-4" onClick={LoadMore}>Load More</div>
                    </Card.Body>
                </Card>
            }
        </>
    )
}