import {Card} from "react-bootstrap";
import {UseDataDetail} from "../Context/NewsDetailProvider.tsx";
import {Comments} from "../Component/Comments.tsx";
import {DateFormat} from "../../Util/TimeFormat.ts";
import {UseData} from "../Context/DataProvider.tsx";

export function PostDetail(){
   const { detail, loading, error,showComments, LoadMore } = UseDataDetail()
    const { news } = UseData()
    if(loading) return <h2 className="d-flex justify-content-center align-items-center">Loading...</h2>
    if(error) return <h2 className="d-flex justify-content-center align-items-center">Error</h2>
    console.log(showComments)




     return(
        <>
            {!loading &&
                <Card className="m-5 p-2 border-0">
                    <Card.Title className="border-bottom pb-4 ">
                        SHOW HN : {detail?.title}
                    </Card.Title>
                    {news.map(news=>(
                        news.story_id === detail?.story_id && news.story_text? <p dangerouslySetInnerHTML={{__html: news?.story_text}}/> : null
                    ))}
                    <Card.Body>
                        <div className="d-flex flex-row text-muted ">
                         {detail?.points} points
                         <p className="ms-4">{DateFormat(detail?.created_at)}</p>
                        </div>
                        <div className="mt-4" >
                            {showComments.map(comment=>(
                                <Comments key={comment.id} {...comment}/>
                            ))}
                        </div>
                    <div className="btn btn-sm btn-warning  mt-4" onClick={LoadMore}>Load More</div>
                    </Card.Body>
                </Card>
            }
        </>
    )
}