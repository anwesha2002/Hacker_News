import {createContext, ReactNode, useContext, useEffect, useState} from "react";
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
    comments : CommentModel[]
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



    useEffect(()=>{
        (async ()=>{
           try {
               setLoading(true)
               await FetchDetail(story_id.story_id)
                   .then(data=>{
                       setDetail(data.data)
                       if(data.data.children){
                            setComments(data.data.children)
                       }
                       setLoading(false)
                   })
           } catch (err){
               console.log(err)
               setError(true)
           }
        })()
    },[story_id])


    return(
        <DetailProviderContext.Provider value={{detail, loading, comments, error}}>
            {children}
        </DetailProviderContext.Provider>
    )
}