import {CommentModel} from "../../Model/CommentModel.ts";
import {Card} from "react-bootstrap";
import {DateFormat} from "../../Util/TimeFormat.ts";
import '../../Style/Comments.css'
import {useState} from "react";
import {CommentClickedModal} from "./CommentClickedmodal.tsx";
import {Truncate} from "../../Util/Truncate.tsx";



export function Comments({author, created_at,text, children} : CommentModel){
    const [clicked , setClicked] = useState(false)


    return(
        <>

            <Card title="Click to see full comment" className=" pb-3 ps-4 pt-3  border-0 border-warning comments border-bottom border-start">
                <div className="d-flex flex-row">
                    <h5>{author}</h5>
                    <span className="ms-5">{DateFormat(created_at)}</span>
                </div>
                <p onClick={()=>setClicked(true)} className="text-muted" dangerouslySetInnerHTML={{__html: Truncate(text)}}/>
            </Card>
            {children?.map((child)=>(
                <div key={child.id} className="ms-5 text-muted  ">
                    {children &&
                        children.length > 0 &&
                        <div>
                            <h6>Replies</h6>
                            <Comments  {...child} />
                        </div>
                    }
                </div>
            ))}
            {clicked &&
                <CommentClickedModal text={text} author={author} onDismiss={()=>setClicked(false)}/>
            }
        </>
    )
}