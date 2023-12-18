import {CommentModel} from "../../Model/CommentModel.ts";
import {Card} from "react-bootstrap";
import {DateFormat} from "../../Util/TimeFormat.ts";

export function Comments({author, created_at,text, children} : CommentModel){



    return(
        <>
            <Card className=" pb-3 ps-4 pt-3  border-0 border-warning  border-bottom border-start">
                <div className="d-flex flex-row">
                    <h6>{author}</h6>
                    <span className="ms-5">{DateFormat(created_at)}</span>
                </div>
                <p dangerouslySetInnerHTML={{__html: text}}/>
            </Card>
            {children?.map((child)=>(
                <div key={child.id} className="ms-5 text-muted  ">
                    {children &&
                        children.length > 0 &&
                        <Comments  {...child} />
                    }
                </div>
            ))}

        </>
    )
}