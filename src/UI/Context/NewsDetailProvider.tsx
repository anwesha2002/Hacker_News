import {createContext, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";
import { FetchDetail} from "../../Data/Remote/FetchApi.tsx";
import {HNewsModel} from "../../Model/HNewsModel.ts";
import {CommentModel} from "../../Model/CommentModel.ts";

type DetailProviderProps ={
    children : ReactNode
}

type DetailContextProps = {
    detail : HNewsModel | undefined,
    loading : boolean,
    error : boolean,
    showComments : CommentModel[],
    LoadMore : () => void
}

const DetailProviderContext = createContext({} as DetailContextProps )

export function UseDataDetail(){
    return useContext(DetailProviderContext)
}

export function DetailProvider({children} : DetailProviderProps){
    const story_id = useParams<string>()
    const [detail, setDetail] = useState<HNewsModel>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [comments, setComments] = useState<CommentModel[]>([])
    const [showComments, setShowComment] = useState<CommentModel[]>([])
    const count  = useRef(5)




    useEffect(()=>{
        (async ()=>{
           try {
               setLoading(true)
               await FetchDetail(story_id.story_id)
                   .then(data=>{
                       setDetail(data.data)
                       if(data.data.children){
                           setComments(data.data.children)
                           setShowComment((data.data.children).slice(0, 5));
                       }
                       setLoading(false)
                   })
           } catch (err){
               console.log(err)
               setError(true)
           }
        })()
    },[story_id])


    function LoadMore(){
        count.current = count.current + 5;
        setShowComment([...comments.slice(0,count.current)])
    }

    return(
        <DetailProviderContext.Provider value={{detail, loading, showComments, error, LoadMore}}>
            {children}
        </DetailProviderContext.Provider>
    )
}