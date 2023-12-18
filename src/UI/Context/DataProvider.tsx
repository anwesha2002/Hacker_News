import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {FetchDataFromApi} from "../../Data/Remote/FetchApi.tsx";
import {HNewsModel} from "../../Model/HNewsModel.ts";


type DataProviderProps ={
    children : ReactNode
}

type DataContextProps = {
    setSearchQuery : Dispatch<SetStateAction<string>>
    searchQuery : string,
    news : HNewsModel[],
    loading : boolean,
    error : boolean,
    setPageNum : Dispatch<SetStateAction<number>>,
    pageNum : number
}


const DataProviderContext = createContext({} as DataContextProps)
export function UseData(){
    return useContext(DataProviderContext)
}



export function DataProvider({children} : DataProviderProps){

    const [searchQuery , setSearchQuery] = useState("")
    const [news , setNews] = useState<HNewsModel[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [pageNum, setPageNum] = useState(0)



    function GetData(input : string) {

        return(
            FetchDataFromApi(input,pageNum)
        )
    }



    useEffect(()=>{
        const fetchNews = setTimeout(async()=>{
            try {
                setLoading(true)
                await GetData(searchQuery)
                    .then(data=>{
                        setNews(data.data.hits)
                        setLoading(false)
                    })
            }catch (err){
                console.log(err)
                setError(true)
            }
        }, 500)
        return () => clearTimeout(fetchNews)
    },[searchQuery, pageNum])

    return(
        <DataProviderContext.Provider value={{setSearchQuery,searchQuery, news, loading, error, setPageNum, pageNum }}>
            {children}
        </DataProviderContext.Provider>
    )
}